<?php
session_start();
require 'database.php'; // Connexion à la base de données

// Vérifiez que l'utilisateur est connecté et qu'il a un rôle d'administrateur
if (!isset($_SESSION['username']) || $_SESSION['role'] != 'administrateur') {
    header("Location: login.php"); // Redirige vers la page de connexion si l'utilisateur n'est pas administrateur
    exit();
}

// Ajouter un service
if (isset($_POST['add_service'])) {
    $nom = $_POST['nom'];
    $description = $_POST['description'];
    $stmt = $pdo->prepare("INSERT INTO services (nom, description) VALUES (:nom, :description)");
    $stmt->execute(['nom' => $nom, 'description' => $description]);
}

// Supprimer un service
if (isset($_GET['delete_service'])) {
    $service_id = $_GET['delete_service'];
    $stmt = $pdo->prepare("DELETE FROM services WHERE service_id = :service_id");
    $stmt->execute(['service_id' => $service_id]);
}

// Récupérer les services
$stmt = $pdo->query("SELECT * FROM services");
$services = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gérer les Services</title>
    <link href="CSS page services.css" rel="stylesheet" />
</head>
<body>
    <header>
        <h1>Gérer les Services</h1>
        <nav>
            <a href="admin_dashboard.php">Tableau de bord</a>
            <a href="manage_reviews.php">Gérer les avis</a>
            <a href="manage_services.php">Gérer les services</a>
            <a href="logout.php">Déconnexion</a>
        </nav>
    </header>
    <main>
        <h2>Ajouter un Service</h2>
        <form action="manage_services.php" method="POST">
            <label for="nom">Nom :</label>
            <input type="text" id="nom" name="nom" required>
            <label for="description">Description :</label>
            <textarea id="description" name="description" rows="4" required></textarea>
            <input type="submit" name="add_service" value="Ajouter le service">
        </form>
        <h2>Liste des Services</h2>
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($services as $service): ?>
                <tr>
                    <td><?php echo htmlspecialchars($service['nom']); ?></td>
                    <td><?php echo htmlspecialchars($service['description']); ?></td>
                    <td>
                        <a href="manage_services.php?delete_service=<?php echo $service['service_id']; ?>">Supprimer</a>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </main>
</body>
</html>
