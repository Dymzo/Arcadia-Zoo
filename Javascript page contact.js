// Fonction pour ouvrir/fermer le menu burger
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
    if (event.target == document.getElementById('loginModal')) {
        document.getElementById('loginModal').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.show-more');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Cacher toutes les descriptions et galeries d'images
            document.querySelectorAll('.description').forEach(desc => {
                desc.classList.remove('show');
            });

            document.querySelectorAll('.image-gallery').forEach(gallery => {
                gallery.classList.remove('show');
            });

            // Retirer la classe active de tous les boutons
            buttons.forEach(btn => btn.classList.remove('active'));

            // Afficher la description et la galerie d'images associées au bouton cliqué
            const description = this.previousElementSibling; // Accède au <p class="description">
            const imageGallery = this.nextElementSibling; // Accède au <div class="image-gallery">
            
            description.classList.add('show');
            imageGallery.classList.add('show');
            this.classList.add('active');
        });
    });
});
