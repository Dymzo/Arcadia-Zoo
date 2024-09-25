<?php
// Connexion à la base de données
include 'config.php'; // Fichier de configuration de la base de données

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['animal'])) {
        $animalName = $_POST['animal'];

        // Préparer et exécuter la requête pour incrémenter le compteur
        $sql = "UPDATE animal SET consultation_count = consultation_count + 1 WHERE prenom = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $animalName);

        if ($stmt->execute()) {
            echo "Compteur mis à jour avec succès";
        } else {
            echo "Erreur lors de la mise à jour du compteur: " . $stmt->error;
        }
        $stmt->close();
    } else {
        echo "Nom de l'animal manquant";
    }
} else {
    echo "Requête non valide";
}

$conn->close();
?>
