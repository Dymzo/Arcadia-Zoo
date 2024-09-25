-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 20 sep. 2024 à 15:36
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `arcadia_zoo`
--

-- --------------------------------------------------------

--
-- Structure de la table `alimentation_animale`
--

CREATE TABLE `alimentation_animale` (
  `alimentation_id` int(11) NOT NULL,
  `animal_id` int(11) NOT NULL,
  `nourriture` varchar(255) DEFAULT NULL,
  `grammage` int(11) DEFAULT NULL,
  `date` date NOT NULL,
  `heure` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `animal`
--

CREATE TABLE `animal` (
  `animal_id` int(11) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `race` varchar(255) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `habitat_id` int(11) NOT NULL,
  `compteur_consultations` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `animal`
--

INSERT INTO `animal` (`animal_id`, `prenom`, `race`, `image_url`, `habitat_id`, `compteur_consultations`) VALUES
(1, 'Léo le lion', 'Lion', 'Image ECF/Image lion 1.jpg', 1, 1),
(2, 'Zozo le zèbre', 'Zèbre', 'Image ECF/Image zebre 1.jpg', 1, 0),
(3, 'Peter le perroquet', 'Perroquet', 'Image ECF/Image perroquet 2.jpg', 2, 0),
(4, 'Paul le panda roux', 'Panda roux', 'Image ECF/Image panda roux 1.jpg', 2, 0),
(5, 'Ronan le rhinocéros', 'Rhinocéros', 'Image ECF/pexels-ellie-burgin-1661546-13147987.jpg', 1, 0),
(6, 'Flavie le flamant rose', 'Flamant rose', 'Image ECF/Image flamants rose 2.jpg', 3, 0),
(7, 'Gigie la girafe', 'Giraffe', 'Image ECF/Image giraffe 1.jpg', 1, 0),
(8, 'Gérard le gorille', 'Gorille', 'Image ECF/Image Gorille 1.jpg', 2, 0),
(9, 'Elie éléphant', 'Éléphant', 'Image ECF/Image éléphant 2.jpg', 1, 0),
(10, 'Serge le serpent', 'Serpent', 'Image ECF/Image serpent 1.jpg', 2, 0),
(11, 'Charlyne le chimpanzé', 'Chimpanzé', 'Image ECF/Image chimpaze 1.jpg', 2, 0),
(12, 'Benoit le buffle', 'Buffle', 'Image ECF/Image Buffle 1.jpg', 1, 0),
(13, 'Pathie la panthère noire', 'Panthère noire', 'Image ECF/panthere-elegante-agile-rodant-dans-broussailles-denses-furtivite-grace_1268-35055.jpg', 2, 0),
(14, 'Horatio hippopotame', 'Hippopotame', 'Image ECF/Image hippo 2.jpg', 3, 0),
(15, 'Théo le tigre', 'Tigre', 'Image ECF/Image tigre 2.jpg', 2, 0),
(16, 'Rayan le ragondin', 'Ragondin', 'Image ECF/Image ragondin 1.jpg', 3, 0),
(17, 'Crycrie le crocodile', 'Crocodile', 'Image ECF/gros-plan-alligator-sable_649448-4938.jpg', 3, 0),
(18, 'Franklin la tortue', 'Tortue', 'Image ECF/tortue-eperonnee-africaine-dans-herbe_167946-113.jpg', 1, 0);

-- --------------------------------------------------------

--
-- Structure de la table `avis`
--

CREATE TABLE `avis` (
  `avis_id` int(11) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `commentaire` text NOT NULL,
  `isVisible` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `avis`
--

INSERT INTO `avis` (`avis_id`, `pseudo`, `commentaire`, `isVisible`) VALUES
(1, 'Antoine', 'super', 1),
(2, 'Ollivier ', 'De toute beauté', 1),
(3, 'dymzo', 'super top', 1);

-- --------------------------------------------------------

--
-- Structure de la table `compte_rendu_veterinaire`
--

CREATE TABLE `compte_rendu_veterinaire` (
  `compte_rendu_id` int(11) NOT NULL,
  `animal_id` int(11) NOT NULL,
  `etat` text NOT NULL,
  `nourriture` varchar(255) DEFAULT NULL,
  `grammage` int(11) DEFAULT NULL,
  `date_passage` date DEFAULT NULL,
  `detail_etat` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `consultation_animaux`
--

CREATE TABLE `consultation_animaux` (
  `animal_id` int(11) NOT NULL,
  `consultation_count` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
  `contact_id` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `habitat`
--

CREATE TABLE `habitat` (
  `habitat_id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `habitat`
--

INSERT INTO `habitat` (`habitat_id`, `nom`, `description`, `image_url`) VALUES
(1, 'Savane', 'Une vaste étendue herbeuse où vivent de nombreux animaux.', 'Image ECF/savane.jpg'),
(2, 'Jungle', 'Une forêt tropicale dense et humide avec une grande biodiversité.', 'Image ECF/jungle.jpg'),
(3, 'Marais', 'Une zone humide avec de l’eau stagnante et une végétation variée.', 'Image ECF/marais.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE `role` (
  `role_id` int(11) NOT NULL,
  `label` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`role_id`, `label`) VALUES
(1, 'Administrateur');

-- --------------------------------------------------------

--
-- Structure de la table `service`
--

CREATE TABLE `service` (
  `service_id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`user_id`, `username`, `password`, `nom`, `prenom`, `role_id`) VALUES
(1, 'bossadmin@arcadia.com', '$2y$10$/jlYvh0B4Zd0sCCBYHgAcOVKWOcQdZSUIyCHo4uFTB4WqAoU.pbPu', 'Boss', 'José', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `alimentation_animale`
--
ALTER TABLE `alimentation_animale`
  ADD PRIMARY KEY (`alimentation_id`),
  ADD KEY `animal_id` (`animal_id`);

--
-- Index pour la table `animal`
--
ALTER TABLE `animal`
  ADD PRIMARY KEY (`animal_id`),
  ADD KEY `habitat_id` (`habitat_id`);

--
-- Index pour la table `avis`
--
ALTER TABLE `avis`
  ADD PRIMARY KEY (`avis_id`);

--
-- Index pour la table `compte_rendu_veterinaire`
--
ALTER TABLE `compte_rendu_veterinaire`
  ADD PRIMARY KEY (`compte_rendu_id`),
  ADD KEY `animal_id` (`animal_id`);

--
-- Index pour la table `consultation_animaux`
--
ALTER TABLE `consultation_animaux`
  ADD PRIMARY KEY (`animal_id`);

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contact_id`);

--
-- Index pour la table `habitat`
--
ALTER TABLE `habitat`
  ADD PRIMARY KEY (`habitat_id`);

--
-- Index pour la table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`),
  ADD UNIQUE KEY `label` (`label`);

--
-- Index pour la table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`service_id`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `alimentation_animale`
--
ALTER TABLE `alimentation_animale`
  MODIFY `alimentation_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `animal`
--
ALTER TABLE `animal`
  MODIFY `animal_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `avis`
--
ALTER TABLE `avis`
  MODIFY `avis_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `compte_rendu_veterinaire`
--
ALTER TABLE `compte_rendu_veterinaire`
  MODIFY `compte_rendu_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `contact`
--
ALTER TABLE `contact`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `habitat`
--
ALTER TABLE `habitat`
  MODIFY `habitat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `role`
--
ALTER TABLE `role`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `service`
--
ALTER TABLE `service`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `alimentation_animale`
--
ALTER TABLE `alimentation_animale`
  ADD CONSTRAINT `alimentation_animale_ibfk_1` FOREIGN KEY (`animal_id`) REFERENCES `animal` (`animal_id`);

--
-- Contraintes pour la table `animal`
--
ALTER TABLE `animal`
  ADD CONSTRAINT `animal_ibfk_1` FOREIGN KEY (`habitat_id`) REFERENCES `habitat` (`habitat_id`);

--
-- Contraintes pour la table `compte_rendu_veterinaire`
--
ALTER TABLE `compte_rendu_veterinaire`
  ADD CONSTRAINT `compte_rendu_veterinaire_ibfk_1` FOREIGN KEY (`animal_id`) REFERENCES `animal` (`animal_id`);

--
-- Contraintes pour la table `consultation_animaux`
--
ALTER TABLE `consultation_animaux`
  ADD CONSTRAINT `consultation_animaux_ibfk_1` FOREIGN KEY (`animal_id`) REFERENCES `animal` (`animal_id`);

--
-- Contraintes pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD CONSTRAINT `utilisateur_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
