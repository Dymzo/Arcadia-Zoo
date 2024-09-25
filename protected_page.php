<?php
session_start();
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'Administrateur') {
    // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté ou n'est pas un admin
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Protégée</title>
</head>
<body>
    <h2>Bienvenue sur la page protégée</h2>
    <p>Contenu réservé aux administrateurs.</p>
    <a href="logout.php">Se déconnecter</a>
</body>
</html>
