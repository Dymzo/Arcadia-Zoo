let slideIndex = 0;
const slideInterval = 7000; // Temps d'affichage pour chaque diapositive (en millisecondes)
const slidesWrapper = document.getElementById('slidesWrapper');
const dots = document.getElementsByClassName('dot');
const totalSlides = document.getElementsByClassName('slides').length;

// Fonction pour afficher les diapositives
function showSlides() {
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    slidesWrapper.style.transform = `translateX(-${slideIndex * 100}vw)`;

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    dots[slideIndex].classList.add('active');
}

// Fonction pour changer la diapositive via les flèches
function changeSlide(n) {
    slideIndex += n;
    showSlides();
}

// Fonction pour aller à une diapositive spécifique via les points indicateurs
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

// Déclencher le défilement automatique toutes les 7 secondes
setInterval(function () {
    slideIndex++;
    showSlides();
}, slideInterval);








// Fonction pour afficher/masquer le menu burger
function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
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











let currentIndex = 0; // Indice actuel de l'avis affiché
const items = document.querySelectorAll('.avis-item');
const totalItems = items.length;

function moveSlide(n) {
    currentIndex += n;

    // Réinitialiser l'index si nécessaire
    if (currentIndex >= totalItems) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    }

    // Déplacer le conteneur pour afficher l'avis approprié
    const container = document.querySelector('.avis-grid');
    const itemWidth = items[0].offsetWidth; // Largeur de chaque avis
    container.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Initialisation du carousel
document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    prevButton.addEventListener('click', () => moveSlide(-1));
    nextButton.addEventListener('click', () => moveSlide(1));
});







document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');
            ratingInput.value = value;

            stars.forEach(star => {
                star.classList.remove('selected');
            });
            for (let i = 0; i < value; i++) {
                stars[i].classList.add('selected');
            }
        });

        star.addEventListener('mouseover', () => {
            const value = star.getAttribute('data-value');
            stars.forEach(star => {
                if (star.getAttribute('data-value') <= value) {
                    star.classList.add('hover');
                } else {
                    star.classList.remove('hover');
                }
            });
        });

        star.addEventListener('mouseout', () => {
            stars.forEach(star => {
                star.classList.remove('hover');
            });
        });
    });
});










// Fonction pour gérer la soumission du formulaire de revue
document.getElementById("reviewForm").onsubmit = function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    var form = event.target;
    var formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData
    }).then(response => response.text())
      .then(result => {
          if (result.includes("Avis envoyé avec succès!")) {
              openSuccessModal();
          } else {
              alert("Une erreur est survenue.");
          }
      }).catch(error => {
          console.error("Erreur :", error);
      });
};



