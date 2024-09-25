<?php
// Connexion à la base de données
$servername = "localhost";
$username = "root";  // Ton utilisateur MySQL (vérifie si c'est correct)
$password = "";  // Ton mot de passe MySQL (vide si pas de mot de passe)
$dbname = "nom_de_ta_base_de_donnees";  // Remplace par le nom de ta base de données

// Créer la connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Échec de la connexion : " . $conn->connect_error);
}

// Fonction pour incrémenter le compteur de consultations
function incrementConsultationCounter($animalId) {
    global $conn;

    // Préparer la requête SQL pour mettre à jour le compteur
    $sql = "UPDATE animal SET compteur_consultations = compteur_consultations + 1 WHERE animal_id = ?";
    $stmt = $conn->prepare($sql);
    
    // Liaison du paramètre
    $stmt->bind_param("i", $animalId);
    
    // Exécution de la requête
    if ($stmt->execute()) {
        return true;
    } else {
        return false;
    }
}

// Vérifier si l'ID de l'animal est passé dans l'URL
if (isset($_GET['animal_id'])) {
    $animalId = $_GET['animal_id'];

    // Incrémenter le compteur
    if (incrementConsultationCounter($animalId)) {
        echo "Compteur de consultations mis à jour avec succès.";
    } else {
        echo "Erreur lors de la mise à jour du compteur.";
    }
}

$conn->close();
?>
