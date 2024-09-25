<?php
session_start();
require 'database.php'; // Connexion à la base de données

// Vérifiez que l'utilisateur est connecté et qu'il a un rôle d'administrateur
if (!isset($_SESSION['username']) || $_SESSION['role'] != 'Administrateur') {
    header("Location: login.php"); // Redirige vers la page de connexion si l'utilisateur n'est pas administrateur
    exit();
}

// Valider un avis
if (isset($_GET['approve_id'])) {
    $approve_id = $_GET['approve_id'];
    $stmt = $pdo->prepare("UPDATE avis SET isVisible = 1 WHERE avis_id = :avis_id");
    $stmt->execute(['avis_id' => $approve_id]);
}

// Supprimer un avis
if (isset($_GET['delete_id'])) {
    $delete_id = $_GET['delete_id'];
    $stmt = $pdo->prepare("DELETE FROM avis WHERE avis_id = :avis_id");
    $stmt->execute(['avis_id' => $delete_id]);
}

// Récupérer les avis non validés
$stmt = $pdo->query("SELECT * FROM avis WHERE isVisible = 0");
$avis = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gérer les Avis</title>
    <link href="CSS page accueil.css" rel="stylesheet" />
</head>
<body>
    <header>
        <h1>Gérer les Avis</h1>
        <nav>
            <a href="admin_dashboard.php">Tableau de bord</a>
            <a href="manage_reviews.php">Gérer les avis</a>
            <a href="manage_services.php">Gérer les services</a>
            <a href="logout.php">Déconnexion</a>
        </nav>
    </header>
    <main>
        <h2>Avis en attente de validation</h2>
        <table>
            <thead>
                <tr>
                    <th>Pseudo</th>
                    <th>Avis</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($avis as $item): ?>
                <tr>
                    <td><?php echo htmlspecialchars($item['pseudo']); ?></td>
                    <td><?php echo htmlspecialchars($item['commentaire']); ?></td>
                    <td>
                        <a href="manage_reviews.php?approve_id=<?php echo $item['avis_id']; ?>">Approuver</a>
                        <a href="manage_reviews.php?delete_id=<?php echo $item['avis_id']; ?>">Supprimer</a>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </main>
</body>
</html>
