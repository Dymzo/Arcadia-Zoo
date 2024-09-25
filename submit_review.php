<?php
session_start();
require 'database.php'; // Connexion à la base de données

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $pseudo = $_POST['name'];
    $commentaire = $_POST['review'];
    $isVisible = 0; // Par défaut, non visible jusqu'à validation

    // Insertion dans la base de données
    $stmt = $pdo->prepare("INSERT INTO avis (pseudo, commentaire, isVisible) VALUES (:pseudo, :commentaire, :isVisible)");
    $stmt->execute(['pseudo' => $pseudo, 'commentaire' => $commentaire, 'isVisible' => $isVisible]);

    header("Location: index.html"); // Redirige vers la page d'accueil
    exit();
}
try {
    $pdo = new PDO($dsn, $user, $pass, $options);
    echo "Connexion réussie";
} catch (\PDOException $e) {
    echo "Échec de la connexion : " . $e->getMessage();
}

?>
