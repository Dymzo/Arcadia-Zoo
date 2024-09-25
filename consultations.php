<?php
// Chemin vers le fichier JSON
$jsonFile = 'consultations.json';

// Vérifier si le fichier existe, sinon le créer
if (!file_exists($jsonFile)) {
    file_put_contents($jsonFile, json_encode([])); // Créer un fichier vide
}

// Charger les données du fichier JSON
$jsonData = file_get_contents($jsonFile);
$consultations = json_decode($jsonData, true); // Décoder le JSON en tableau associatif

// Récupérer le nom de l'animal depuis l'URL (ex: ?animal=leo_le_lion)
if (isset($_GET['animal'])) {
    $animalNom = str_replace(' ', ' ', $_GET['animal']); // Remplacer les underscores par des espaces

    // Vérifier si l'animal est déjà dans le fichier, sinon l'ajouter avec une consultation initiale de 0
    if (!isset($consultations[$animalNom])) {
        $consultations[$animalNom] = 0;
    }

    // Incrémenter le compteur de consultations
    $consultations[$animalNom]++;

    // Sauvegarder les nouvelles données dans le fichier JSON
    file_put_contents($jsonFile, json_encode($consultations));

    echo "Le compteur de consultations pour $animalNom est maintenant de " . $consultations[$animalNom] . ".";
} else {
    echo "Aucun animal sélectionné.";
}
?>
