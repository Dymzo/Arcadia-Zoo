// Fonction pour ouvrir/fermer le menu burger 
function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Ouvre la fenêtre modale de connexion
function openModal() {
    document.getElementById('loginModal').style.display = 'block';
}

// Ferme la fenêtre modale de connexion
function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Fonction pour fermer la fenêtre modale de l'animal
function closeAnimalModal() {
    document.getElementById('animalModal').style.display = 'none';
}

// Fonction pour mettre à jour l'image dans la modale
function updateImage() {
    document.getElementById('modalImage').src = imageArray[currentImageIndex];
}

// Fonction pour afficher l'image précédente
function prevImage() {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : imageArray.length - 1;
    updateImage();
}

// Fonction pour afficher l'image suivante
function nextImage() {
    currentImageIndex = (currentImageIndex < imageArray.length - 1) ? currentImageIndex + 1 : 0;
    updateImage();
}

// Gérer la fermeture de la modale en cliquant en dehors de la fenêtre modale
window.onclick = function(event) {
    var modal = document.getElementById('animalModal');
    if (event.target === modal) {
        closeAnimalModal();
    }
}

// Fonction pour obtenir les paramètres de l'URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        animal: params.get('animal')
    };
}

// Fonction pour ouvrir la modale avec les informations de l'animal à partir des paramètres de l'URL
function openAnimalModalFromParams() {
    const params = getQueryParams();
    const animalName = params.animal_id;

    const animalData = {
        "leo_le_lion": {
            name: 'Léo le lion',
            images: [
                'Image ECF/Image lion 1.jpg',
                'Image ECF/Image lion 2.jpg'
            ],
            species: 'Lion',
            habitat: 'Savane',
            health: 'En bonne santé',
            age: '5 ans',
            diet: 'Viande',
            foodAmount: '2 kg',
            visitDate: '15/08/2024',
            notes: 'Examen complet effectué.'
        },
        "zozo_le_zebre": {
            name: 'Zozo le zèbre',
            images: [
                'Image ECF/Image zebre 1.jpg',
                'Image ECF/Image zebre 2.jpg'
            ],
            species: 'Zèbre',
            habitat: 'Savane',
            health: 'En bonne santé',
            age: '4 ans',
            diet: 'Herbe',
            foodAmount: '3 kg',
            visitDate: '12/09/2024',
            notes: 'Examen de routine effectué.'
        },
        "peter_le_perroquet": {
            name: 'Peter le perroquet',
            images: [
                'Image ECF/Image perroquet 1.jpg',
                'Image ECF/Image perroquet 2.jpg'
            ],
            species: 'Perroquet',
            habitat: 'Jungle',
            health: 'En bonne santé',
            age: '2 ans',
            diet: 'Fruits',
            foodAmount: '500 g',
            visitDate: '10/08/2024',
            notes: 'Examen complet effectué.'
        },
        "paul_le_panda_roux": {
            name: 'Paul le panda roux',
            images: [
                'Image ECF/Image panda roux 1.jpg',
                'Image ECF/Image panda roux 2.jpg'
            ],
            species: 'Panda roux',
            habitat: 'Jungle',
            health: 'En bonne santé',
            age: '6 ans',
            diet: 'Bambou',
            foodAmount: '1 kg',
            visitDate: '20/08/2024',
            notes: 'Examen complet effectué.'
        },
        "ronan_le_rhinoceros": {
            name: 'Ronan le rhinocéros',
            images: [
                'Image ECF/pexels-ellie-burgin-1661546-13147987.jpg',
                'Image ECF/Image rhinoceros 2.jpg'
            ],
            species: 'Rhinocéros',
            habitat: 'Savane',
            health: 'En bonne santé',
            age: '7 ans',
            diet: 'Herbe',
            foodAmount: '5 kg',
            visitDate: '05/08/2024',
            notes: 'Examen complet effectué.'
        },
        "flavie_le_flamant_rose": {
            name: 'Flavie le flamant rose',
            images: [
                'Image ECF/Image flamants rose 2.jpg',
                'Image ECF/Image flamants rose 1.jpg'
            ],
            species: 'Flamant rose',
            habitat: 'Marais',
            health: 'En bonne santé',
            age: '3 ans',
            diet: 'Algues',
            foodAmount: '200 g',
            visitDate: '22/07/2024',
            notes: 'Examen de routine effectué.'
        },
        "gigie_la_giraffe": {
            name: 'Gigie la giraffe',
            images: [
                'Image ECF/Image giraffe 1.jpg',
                'Image ECF/Image giraffe 2.jpg'
            ],
            species: 'Giraffe',
            habitat: 'Savane',
            health: 'En bonne santé',
            age: '8 ans',
            diet: 'Feuilles',
            foodAmount: '4 kg',
            visitDate: '18/08/2024',
            notes: 'Examen complet effectué.'
        },
        "gerard_le_gorille": {
            name: 'Gérard le gorille',
            images: [
                'Image ECF/Image Gorille 1.jpg',
                'Image ECF/Image Gorille 2.jpg'
            ],
            species: 'Gorille',
            habitat: 'Jungle',
            health: 'En bonne santé',
            age: '9 ans',
            diet: 'Fruits',
            foodAmount: '1.5 kg',
            visitDate: '25/08/2024',
            notes: 'Examen complet effectué.'
        },
        "elie_lelephant": {
            name: 'Elie léléphant',
            images: [
                'Image ECF/Image éléphant 2.jpg',
                'Image ECF/Image éléphant 1.jpg'
            ],
            species: 'Éléphant',
            habitat: 'Savane',
            health: 'En bonne santé',
            age: '10 ans',
            diet: 'Herbe',
            foodAmount: '8 kg',
            visitDate: '30/08/2024',
            notes: 'Examen complet effectué.'
        },
        "serge_le_serpent": {
            name: 'Serge le serpent',
            images: [
                'Image ECF/Image serpent 1.jpg',
                'Image ECF/Image serpent 2.jpg'
            ],
            species: 'Serpent',
            habitat: 'Jungle',
            health: 'En bonne santé',
            age: '3 ans',
            diet: 'Rongeurs',
            foodAmount: '300 g',
            visitDate: '28/08/2024',
            notes: 'Examen de routine effectué.'
        },
        "charlyne_le_chimpanze": {
            name: 'Charlyne le chimpanzé',
            images: [
                'Image ECF/Image chimpaze 1.jpg',
                'Image ECF/Image chimpaze 2.jpg'
            ],
            species: 'Chimpanzé',
            habitat: 'Jungle',
            health: 'En bonne santé',
            age: '12 ans',
            diet: 'Fruits',
            foodAmount: '2 kg',
            visitDate: '15/09/2024',
            notes: 'Examen complet effectué.'
        },
        "benoit_le_buffle": {
            name: 'Benoit le buffle',
            images: [
                'Image ECF/Image Buffle 1.jpg',
                'Image ECF/Image Buffle 2.jpg'
            ],
            species: 'Buffle',
            habitat: 'Savane',
            health: 'En bonne santé',
            age: '6 ans',
            diet: 'Herbe',
            foodAmount: '4 kg',
            visitDate: '02/09/2024',
            notes: 'Examen de routine effectué.'
        },
        "pathie_la_panthere_noire": {
            name: 'Pathie la panthère noire',
            images: [
                'Image ECF/panthere-elegante-agile-rodant-dans-broussailles-denses-furtivite-grace_1268-35055.jpg',
                'Image ECF/panthere-noire-2.jpg'
            ],
            species: 'Panthère noire',
            habitat: 'Jungle',
            health: 'En bonne santé',
            age: '7 ans',
            diet: 'Viande',
            foodAmount: '3 kg',
            visitDate: '01/08/2024',
            notes: 'Examen complet effectué.'
        },
        "horatio_hippopotame": {
            name: 'Horatio l\'hippopotame',
            images: [
                'Image ECF/Image hippo 2.jpg',
                'Image ECF/Image hippo 1.jpg'
            ],
            species: 'Hippopotame',
            habitat: 'Marais',
            health: 'En bonne santé',
            age: '10 ans',
            diet: 'Herbe',
            foodAmount: '6 kg',
            visitDate: '03/09/2024',
            notes: 'Examen complet effectué.'
        },
        "theo_le_tigre": {
            name: 'Théo le tigre',
            images: [
                'Image ECF/Image tigre 2.jpg',
                'Image ECF/Image tigre 1.jpg'
            ],
            species: 'Tigre',
            habitat: 'Jungle',
            health: 'En bonne santé',
            age: '8 ans',
            diet: 'Viande',
            foodAmount: '4 kg',
            visitDate: '07/09/2024',
            notes: 'Examen complet effectué.'
        },
        "Rayan le ragondin": {
            name: 'Rayan le ragondin',
            images: [
                'Image ECF/Image ragondin 1.jpg',
                'Image ECF/Image ragondin 2.jpg'
            ],
            species: 'Ragondin',
            habitat: 'Marais',
            health: 'En bonne santé',
            age: '2 ans',
            diet: 'Végétaux',
            foodAmount: '200 g',
            visitDate: '08/09/2024',
            notes: 'Examen de routine effectué.'
        },
        "Crycrie le crocodile": {
            name: 'Crycrie le crocodile',
            images: [
                'Image ECF/gros-plan-alligator-sable_649448-4938.jpg',
                'Image ECF/Image crocodile 2.jpg'
            ],
            species: 'Crocodile',
            habitat: 'Marais',
            health: 'En bonne santé',
            age: '6 ans',
            diet: 'Poissons',
            foodAmount: '1 kg',
            visitDate: '11/09/2024',
            notes: 'Examen complet effectué.'
        },
        "Franklin la tortue": {
            name: 'Franklin la tortue',
            images: [
                'Image ECF/tortue-eperonnee-africaine-dans-herbe_167946-113.jpg',
                'Image ECF/Image tortue 2.jpg'
            ],
            species: 'Tortue',
            habitat: 'Savane',
            health: 'En bonne santé',
            age: '15 ans',
            diet: 'Végétaux',
            foodAmount: '100 g',
            visitDate: '09/09/2024',
            notes: 'Examen complet effectué.'
        }
        
    };
    

    const data = animalData[animalName];

    if (data) {
        openAnimalModal(
            data.name,
            data.images,
            data.species,
            data.habitat,
            data.health,
            data.age,
            data.diet,
            data.foodAmount,
            data.visitDate,
            data.notes
        );
     // Incrémente le compteur de consultations de l'animal
     incrementAnimalViewCount(animalName);
    } else {
        console.error("L'animal spécifié dans l'URL n'a pas été trouvé.");
    }
}
// Fonction pour ouvrir la modale de l'animal avec les détails fournis
function openAnimalModal(name, images, species, habitat, health, age, diet, foodAmount, visitDate, notes) {
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalSpecies').textContent = species;
    document.getElementById('modalHabitat').textContent = habitat;
    document.getElementById('modalHealth').textContent = health;
    document.getElementById('modalAge').textContent = age;
    document.getElementById('modalDiet').textContent = diet;
    document.getElementById('modalFoodAmount').textContent = foodAmount;
    document.getElementById('modalVisitDate').textContent = visitDate;
    document.getElementById('modalNotes').textContent = notes;

    // Configuration des images pour la modale
    imageArray = images;
    currentImageIndex = 0;
    updateImage();
    document.getElementById('animalModal').style.display = 'block';
}

// Appel de la fonction au chargement de la page
window.onload = function() {
    openAnimalModalFromParams();  // Ouvre la modale de l'animal à partir des paramètres de l'URL
};

// Exemple de données d'animal (optionnel)
const exampleAnimalData = {
    mainImage: 'URL_DE_L_IMAGE_PRINCIPALE',
    name: 'Nom de l\'animal',
    race: 'Race de l\'animal',
    habitat: 'Habitat de l\'animal',
    state: 'État de l\'animal',
    age: 'Âge de l\'animal',
    food: 'Nourriture proposée',
    foodWeight: 'Grammage de la nourriture',
    vetDate: 'Date de passage du vétérinaire',
    vetComment: 'Avis du vétérinaire'
};

// Exécuter l'exemple (décommenter pour tester)
// openAnimalModal(exampleAnimalData.name, exampleAnimalData.images, exampleAnimalData.race, exampleAnimalData.habitat, exampleAnimalData.state, exampleAnimalData.age, exampleAnimalData.food, exampleAnimalData.foodWeight, exampleAnimalData.vetDate, exampleAnimalData.vetComment);






// Fonction pour envoyer une requête HTTP pour incrémenter le compteur de consultations de l'animal
function incrementAnimalViewCount(animalName) {
    // Remplacez l'URL par le chemin réel de votre API ou fichier PHP qui gère l'incrémentation
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "incremente-compteur.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log('Compteur de consultations mis à jour pour ' + animalName);
            } else {
                console.error('Erreur lors de la mise à jour du compteur de consultations');
            }
        }
    };
    
    // Envoyer le nom de l'animal dans les paramètres de la requête
    xhr.send("animal=" + encodeURIComponent(animalName));
}


 // Fonction pour augmenter le compteur de consultations
 function incrementConsultationCounter(animalId) {
    fetch('increment_counter.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: animalId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log('Compteur de consultations mis à jour !');
        } else {
            console.error('Erreur lors de la mise à jour du compteur.');
        }
    })
    .catch(error => console.error('Erreur :', error));
}

// Appel de la fonction pour incrémenter le compteur au chargement de la page
window.onload = function() {
    const animalId = 'ID_DE_L_ANIMAL'; // Remplace avec l'ID de l'animal
    incrementConsultationCounter(animalId);
};