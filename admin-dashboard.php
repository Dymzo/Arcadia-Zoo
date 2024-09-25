<?php
session_start();
require 'database.php'; // Connexion à la base de données

// Vérifiez que l'utilisateur est connecté et qu'il a un rôle d'administrateur
if (!isset($_SESSION['username']) || $_SESSION['role'] != 'Administrateur') {
    header("Location: page-connexion.php"); // Redirige vers la page de connexion si l'utilisateur n'est pas administrateur
    exit();
}

// Charger les consultations
$jsonFile = 'consultations.json';
$consultations = json_decode(file_get_contents($jsonFile), true);

// Mettre à jour le JSON avec les données de la base de données
try {
    $stmt = $pdo->query("SELECT prenom, compteur_consultations FROM animal");
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $consultations[$row['prenom']] = $row['compteur_consultations'];
    }
    file_put_contents($jsonFile, json_encode($consultations, JSON_PRETTY_PRINT));
} catch (PDOException $e) {
    echo "Erreur lors de la récupération des données : " . $e->getMessage();
}

if (isset($_POST['create_account'])) {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $role_id = $_POST['role_id'];

    try {
        $stmt = $pdo->prepare("INSERT INTO utilisateur (username, password, nom, prenom, role_id) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([$username, $password, $nom, $prenom, $role_id]);
        echo "<p style='color: green;'>Compte créé avec succès!</p>";
    } catch (PDOException $e) {
        echo "<p style='color: red;'>Erreur lors de la création du compte : " . $e->getMessage() . "</p>";
    }
}

if (isset($_POST['delete_account'])) {
    $user_id = $_POST['user_id'];

    try {
        $stmt = $pdo->prepare("DELETE FROM utilisateur WHERE user_id = ?");
        $stmt->execute([$user_id]);
        echo "<p style='color: green;'>Compte supprimé avec succès!</p>";
    } catch (PDOException $e) {
        echo "<p style='color: red;'>Erreur lors de la suppression du compte : " . $e->getMessage() . "</p>";
    }
}

if (isset($_POST['update_account'])) {
    $user_id = $_POST['user_id'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $role_id = $_POST['role_id'];

    try {
        if (!empty($password)) {
            // Si un nouveau mot de passe est fourni, le hacher et mettre à jour
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);
            $stmt = $pdo->prepare("UPDATE utilisateur SET username = ?, password = ?, nom = ?, prenom = ?, role_id = ? WHERE user_id = ?");
            $stmt->execute([$username, $hashed_password, $nom, $prenom, $role_id, $user_id]);
        } else {
            // Sinon, mettre à jour sans changer le mot de passe
            $stmt = $pdo->prepare("UPDATE utilisateur SET username = ?, nom = ?, prenom = ?, role_id = ? WHERE user_id = ?");
            $stmt->execute([$username, $nom, $prenom, $role_id, $user_id]);
        }
        echo "<p style='color: green;'>Compte mis à jour avec succès!</p>";
    } catch (PDOException $e) {
        echo "<p style='color: red;'>Erreur lors de la mise à jour du compte : " . $e->getMessage() . "</p>";
    }
}

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panneau d'Administration</title>
    <link href="CSS admin.css" rel="stylesheet" />
</head>
<body>
    <header>
        <h1>Panneau d'Administration</h1>
        <nav>
            <a href="admin-dashboard.php" class="active">Tableau de bord</a>
            <a href="manage_reviews.php">Gérer les avis</a>
            <a href="manage_services.php">Gérer les services</a>
            <a href="logout.php">Déconnexion</a>
        </nav>
    </header>
    <main>
        <h2>Bienvenue, <?php echo htmlspecialchars($_SESSION['username']); ?>!</h2>
        <p>Vous pouvez gérer les avis, les services, etc.</p>

        <h3>Créer un nouveau compte</h3>
        <form action="admin-dashboard.php" method="post">
            <label for="username">Nom d'utilisateur :</label>
            <input type="text" id="username" name="username" required>
            
            <label for="password">Mot de passe :</label>
            <input type="password" id="password" name="password" required>
            
            <label for="nom">Nom :</label>
            <input type="text" id="nom" name="nom" required>
            
            <label for="prenom">Prénom :</label>
            <input type="text" id="prenom" name="prenom" required>
            
            <label for="role_id">Rôle :</label>
            <select id="role_id" name="role_id" required>
                <option value="1">Administrateur</option>
                <option value="2">Employé</option>
                <option value="3">Vétérinaire</option>
            </select>
            
            <input type="submit" name="create_account" value="Créer le compte">
        </form>

        <h3>Gérer les comptes</h3>
        <table border="1">
            <tr>
                <th>Nom d'utilisateur</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Rôle</th>
                <th>Actions</th>
            </tr>
            <?php
            // Récupérer les comptes de la base de données
            try {
                $stmt = $pdo->query("SELECT user_id, username, nom, prenom, role_id FROM utilisateur");
                while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                    echo "<tr>";
                    echo "<td>" . htmlspecialchars($row['username']) . "</td>";
                    echo "<td>" . htmlspecialchars($row['nom']) . "</td>";
                    echo "<td>" . htmlspecialchars($row['prenom']) . "</td>";
                    echo "<td>" . htmlspecialchars($row['role_id']) . "</td>";
                    echo "<td>
                            <form action='admin-dashboard.php' method='post' style='display:inline;'>
                                <input type='hidden' name='user_id' value='" . $row['user_id'] . "'>
                                <input type='submit' name='delete_account' value='Supprimer' onclick='return confirm(\"Êtes-vous sûr de vouloir supprimer ce compte ?\");'>
                            </form>
                            <form action='admin-dashboard.php' method='post' style='display:inline;'>
                                <input type='hidden' name='user_id' value='" . $row['user_id'] . "'>
                                <input type='submit' name='edit_account' value='Modifier'>
                            </form>
                          </td>";
                    echo "</tr>";
                }
            } catch (PDOException $e) {
                echo "<tr><td colspan='5'>Erreur lors de la récupération des comptes : " . $e->getMessage() . "</td></tr>";
            }
            ?>
        </table>

        <?php
        // Afficher le formulaire de modification si un compte est sélectionné
        if (isset($_POST['edit_account'])) {
            $user_id = $_POST['user_id'];

            // Récupérer les informations de l'utilisateur
            $stmt = $pdo->prepare("SELECT * FROM utilisateur WHERE user_id = ?");
            $stmt->execute([$user_id]);
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
        ?>
        <h3>Modifier le compte de <?php echo htmlspecialchars($user['username']); ?></h3>
        <form action="admin-dashboard.php" method="post">
            <input type="hidden" name="user_id" value="<?php echo $user['user_id']; ?>">
            
            <label for="username">Nom d'utilisateur :</label>
            <input type="text" id="username" name="username" value="<?php echo htmlspecialchars($user['username']); ?>" required>
            
            <label for="password">Mot de passe :</label>
            <input type="password" id="password" name="password"> <!-- Laisser vide si pas de changement -->
            
            <label for="nom">Nom :</label>
            <input type="text" id="nom" name="nom" value="<?php echo htmlspecialchars($user['nom']); ?>" required>
            
            <label for="prenom">Prénom :</label>
            <input type="text" id="prenom" name="prenom" value="<?php echo htmlspecialchars($user['prenom']); ?>" required>
            
            <label for="role_id">Rôle :</label>
            <select id="role_id" name="role_id" required>
                <option value="1" <?php echo $user['role_id'] == 1 ? 'selected' : ''; ?>>Administrateur</option>
                <option value="2" <?php echo $user['role_id'] == 2 ? 'selected' : ''; ?>>Employé</option>
                <option value="3" <?php echo $user['role_id'] == 3 ? 'selected' : ''; ?>>Vétérinaire</option>
            </select>
            
            <input type="submit" name="update_account" value="Mettre à jour">
        </form>
        <?php
        }
        ?>

        <h3>Consultations des animaux</h3>
        <table border="1">
            <tr>
                <th>Animal</th>
                <th>Nombre de consultations</th>
            </tr>
            <?php
            foreach ($consultations as $animal => $count) {
                echo "<tr><td>" . htmlspecialchars($animal) . "</td><td>" . htmlspecialchars($count) . "</td></tr>";
            }
            ?>
        </table>
    </main>
</body>
</html>
