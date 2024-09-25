# Arcadia-Zoo

Description :

Le projet Arcadia a pour but de développer une application web pour le zoo, permettant aux visiteurs de découvrir les animaux, leurs habitats et les services offerts, tout en mettant en avant des valeurs écologiques. L'application utilise HTML, CSS et JavaScript, avec une base de données gérée par PHPMyAdmin. Les principales fonctionnalités incluent une page d'accueil attrayante, un menu de navigation, des vues détaillées des animaux et habitats, et un espace de soumission d'avis. Des sections pour les administrateurs, employés et vétérinaires permettent la gestion des comptes et des rapports. Un tableau de bord analysera les consultations, visant à améliorer les services et à renforcer la notoriété du zoo.


Installation:
# Déploiement de l'application Zoo Arcadia en local

## Prérequis

Avant de déployer l'application, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- [XAMPP](https://www.apachefriends.org/index.html) : Pour exécuter un serveur local avec PHP et MySQL.
- [Composer](https://getcomposer.org/) : Pour gérer les dépendances PHP.
- [Git](https://git-scm.com/) : Pour cloner le dépôt et gérer la version du code.
- [Visual Studio Code](https://code.visualstudio.com/) : Éditeur de code pour modifier les fichiers.

## Étapes de déploiement

1. **Cloner le dépôt**

   Ouvrez un terminal (ou l'invite de commandes) et exécutez la commande suivante pour cloner le dépôt :

   ```bash
   git clone https://github.com/Dymzo/Arcadia-Zoo.git

2. **Configurer XAMPP**

  Lancez XAMPP et démarrez les modules Apache et MySQL.
  Accédez au répertoire htdocs de votre installation XAMPP (généralement C:\xampp\htdocs sous Windows).
  Copiez le dossier arcadia (que vous venez de cloner) dans le répertoire htdocs.



3. **Créer la base de données**

  Ouvrez votre navigateur et accédez à http://localhost/phpmyadmin.
  Cliquez sur "Base de données" et créez une nouvelle base de données nommée Arcadia-Zoo.
  Importez le fichier SQL fourni dans le dossier arcadia (nommé Arcadia-Zoo.sql) pour créer les tables nécessaires.

  
4. **Configurer les fichiers de connexion**

  Ouvrez le fichier de configuration de connexion à la base de données (par exemple, config.php) dans un éditeur de texte.
  Modifiez les paramètres de connexion pour correspondre à votre configuration locale, notamment le nom de la base de données, l'utilisateur (généralement root) et le mot de passe (laissez vide si vous n'avez pas défini de mot de passe).
  
5. **Configurer les fichiers de connexion**

  Dans votre navigateur, accédez à http://localhost/Arcadia/
  Vous devriez voir la page d'accueil de l'application.





**Fonctionnalités**

Présentation des animaux et de leurs habitats.
Soumission d'avis par les visiteurs et formulaire de contact.
Espaces dédiés pour les administrateurs, employés et vétérinaires.
Tableau de bord pour l'analyse des consultations.


**Technologies Utilisées**

HTML, CSS, JavaScript pour le développement front-end.
PHP pour la gestion des interactions avec la base de données.
PHPMyAdmin pour la gestion de la base de données.
XAMPP comme serveur local.

**Contact**
Pour toute question ou commentaire, veuillez contacter aollivier05@gmail.com .