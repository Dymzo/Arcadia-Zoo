<?php
// Connexion à la base de données
$pdo = new PDO('mysql:host=localhost;dbname=Arcadia-Zoo', 'root', '');

// Récupérer l'ID de l'animal depuis l'URL
$animal_id = $_GET['id'];

// Incrémenter le compteur de consultations
$stmt = $pdo->prepare("UPDATE animaux SET compteur_consultations = compteur_consultations + 1 WHERE animal_id = :animal_id");
$stmt->execute([':animal_id' => $animal_id]);

// Récupérer les détails de l'animal pour l'afficher
$stmt = $pdo->prepare("SELECT * FROM animaux WHERE animal_id = :animal_id");
$stmt->execute([':animal_id' => $animal_id]);
$animal = $stmt->fetch();

// Afficher les détails de l'animal
if ($animal) {
    echo "<h1>" . htmlspecialchars($animal['nom']) . "</h1>";
    echo "<p>Description: " . htmlspecialchars($animal['description']) . "</p>";
    echo "<p>Consultations: " . htmlspecialchars($animal['compteur_consultations']) . "</p>";
} else {
    echo "<p>Animal non trouvé.</p>";
}
?>
