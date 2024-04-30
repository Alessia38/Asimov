-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 25 avr. 2024 à 09:41
-- Version du serveur : 8.2.0
-- Version de PHP : 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `asimov`
--

CREATE DATABASE asimov;

USE asimov ;

-- --------------------------------------------------------

--
-- Structure de la table `classe`
--

DROP TABLE IF EXISTS `classe`;
CREATE TABLE IF NOT EXISTS `classe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) DEFAULT NULL,
  `moyenne` float DEFAULT NULL,
  `nbEleve` int DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- --------------------------------------------------------

--
-- Structure de la table `dateprojet`
--

DROP TABLE IF EXISTS `dateprojet`;
CREATE TABLE IF NOT EXISTS `dateprojet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dateDebut` date DEFAULT NULL,
  `dateFin` date DEFAULT NULL,
  `idProjet` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idProjet` (`idProjet`)
);

-- --------------------------------------------------------

--
-- Structure de la table `demandesstages`
--

DROP TABLE IF EXISTS `demandesstages`;
CREATE TABLE IF NOT EXISTS `demandesstages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dateDebut` date DEFAULT NULL,
  `dateFin` date DEFAULT NULL,
  `dateAppel` date DEFAULT NULL,
  `etat` tinyint(1) DEFAULT NULL,
  `attestation` tinyint(1) DEFAULT NULL,
  `convention` tinyint(1) DEFAULT NULL,
  `idUtilisateur` int DEFAULT NULL,
  `idEntreprise` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idUtilisateur` (`idUtilisateur`),
  KEY `idEntreprise` (`idEntreprise`)
);

-- --------------------------------------------------------

--
-- Structure de la table `entreprise`
--

DROP TABLE IF EXISTS `entreprise`;
CREATE TABLE IF NOT EXISTS `entreprise` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- --------------------------------------------------------

--
-- Structure de la table `moyenne`
--

DROP TABLE IF EXISTS `moyenne`;
CREATE TABLE IF NOT EXISTS `moyenne` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idUtilisateur` int DEFAULT NULL,
  `moyenne` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idUtilisateur` (`idUtilisateur`)
);

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

DROP TABLE IF EXISTS `projet`;
CREATE TABLE IF NOT EXISTS `projet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) DEFAULT NULL,
  `idUtilisateur` int DEFAULT NULL,
  `idUtilisateurReferent` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idUtilisateur` (`idUtilisateur`),
  KEY `idUtilisateurReferent` (`idUtilisateurReferent`)
);

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nomUtilisateur` varchar(255) DEFAULT NULL,
  `mdp` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `idRole` int DEFAULT NULL,
  `idReferent` int DEFAULT NULL,
  `idClasse` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idRole` (`idRole`),
  KEY `idReferent` (`idReferent`),
  KEY `idClasse` (`idClasse`)
);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
