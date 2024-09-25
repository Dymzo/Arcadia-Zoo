// Initialisation des diaporamas
function initSlides() {
    const slideshows = ['slideshowsavane', 'slideshowjungle', 'slideshowmarais'];

    slideshows.forEach(slideshowId => {
        let slideIndex = 0;
        const slidesWrapper = document.querySelector(`#${slideshowId} .slides-wrapper`);
        const slides = document.querySelectorAll(`#${slideshowId} .slides`);
        const dots = document.querySelectorAll(`#${slideshowId} .dot`);
        const nextButton = document.querySelector(`#${slideshowId} .next`);
        const prevButton = document.querySelector(`#${slideshowId} .prev`);

        function showSlides() {
            slideIndex = (slideIndex + 1) % slides.length;
            updateSlides();
        }

        function updateSlides() {
            const offset = - (slideIndex * 100);
            slidesWrapper.style.transform = `translateX(${offset}%)`;
            
            dots.forEach(dot => {
                dot.classList.remove("active");
            });
            dots[slideIndex].classList.add("active");
        }

        function changeSlide(n) {
            slideIndex = (slideIndex + n + slides.length) % slides.length;
            updateSlides();
        }

        // Événements pour les boutons de navigation
        if (nextButton) {
            nextButton.addEventListener('click', () => changeSlide(1));
        }

        if (prevButton) {
            prevButton.addEventListener('click', () => changeSlide(-1));
        }

        // Démarrer le diaporama automatique
        let slideInterval = setInterval(showSlides, 5000); // Change image every 5 seconds

        // Assurez-vous que la navigation manuelle arrête le diaporama automatique
        function resetSlideInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(showSlides, 5000);
        }

        // Initialiser les boutons de navigation manuelle pour réinitialiser l'intervalle
        if (nextButton) {
            nextButton.addEventListener('click', resetSlideInterval);
        }

        if (prevButton) {
            prevButton.addEventListener('click', resetSlideInterval);
        }

        showSlides(); // Initial call
    });
}

// Fonction pour afficher la diapositive actuelle
function currentSlide(n, slideshowId) {
    changeSlide(n - 1, slideshowId);
}

// Initialiser les diaporamas et autres éléments au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    initSlides(); // Start slideshows

    // Gérer le bouton dropdown
    document.querySelectorAll('.dropdown-button').forEach(button => {
        button.addEventListener('click', function () {
            const dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === 'flex') {
                dropdownContent.style.display = 'none'; // Cache la liste
                this.textContent = 'Afficher les animaux !'; // Change le texte du bouton
            } else {
                dropdownContent.style.display = 'flex'; // Affiche la liste
                this.textContent = 'Cacher les animaux'; // Change le texte du bouton
            }
        });
    });

    // Appliquer la fonction pour chaque section
    toggleImages('button1', 'images1'); // Pour la première section
    toggleImages('button2', 'images2'); // Pour la deuxième section
    toggleImages('button3', 'images3'); // Pour la troisième section
});

// Fonction pour basculer l'affichage des images d'une section
function toggleImages(buttonId, imagesId) {
    const button = document.getElementById(buttonId);
    const images = document.getElementById(imagesId);

    if (button) {
        button.addEventListener('click', function() {
            if (images.style.display === "flex") {
                images.style.display = "none"; // Cacher les images si elles sont visibles
                this.textContent = 'Afficher les animaux !'; // Change le texte du bouton
            } else {
                images.style.display = "flex"; // Afficher les images si elles sont cachées
                this.textContent = 'Cacher les animaux !'; // Change le texte du bouton
            }
        });
    }
}

// Fonction pour afficher/masquer le menu burger
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Ouvre la fenêtre modale
function openModal() {
    document.getElementById('loginModal').style.display = 'block';
}

// Ferme la fenêtre modale
function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Ferme la fenêtre modale si l'utilisateur clique en dehors de la fenêtre modale
window.onclick = function(event) {
    if (event.target === document.getElementById('loginModal')) {
        closeModal();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner tous les boutons "Voir les détails"
    const buttons = document.querySelectorAll('.toggle-details-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtenir l'ID cible du bouton cliqué
            const targetId = this.getAttribute('data-target');
            const details = document.getElementById(targetId);
            
            // Alterner la visibilité de l'élément de détails
            details.classList.toggle('hidden');
            
            // Mettre à jour le texte du bouton
            this.textContent = details.classList.contains('hidden') 
                ? 'Voir les détails de cet habitat'
                : 'Cacher les détails';
        });
    });
});

// Fonction pour afficher/masquer les détails d'une section
function toggleDetails(sectionId) {
    const details = document.getElementById('details-' + sectionId);
    if (details) {
        details.classList.toggle('hidden');
    }
}
