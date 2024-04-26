use asimov;

INSERT INTO classe (id, libelle, moyenne, nbEleve) VALUES
(3,'3ème', 11,74, 32),
(4,'4ème', 9,52, 30),
(5,'5ème', 15,16, 30),
(6,'6ème', 14,18, 32);

INSERT INTO dateprojet (id, dateDebut, dateFin, idProjet) VALUES
(1, '2024-04-28', '2024-04-30', 1),
(2, '2024-05-15', '2024-05-15', 2),
(3, '2024-06-06', '2024-06-09', 3),
(4, '2024-07-01 ', '2024-07-05', 4);

INSERT INTO demandesstages (id, dateDebut, dateFin, dateAppel, etat, attestation, convention, idUtilisateur, idEntreprise) VALUES
(1, '2024-04-15', '2024-05-15', '2024-04-02', 0, 0, 0, 4, 1),
(2, '2024-12-02', '2024-12-22', '2024-11-29', 0, 0, 0, 6, 3); 

INSERT INTO entreprise (id, nom, contact, adresse) VALUES
(1, 'Schneider Electrics', '0476047968', '45 rue Joseph Monier 92506 Rueil-Malmaison'),
(2, 'Géant Casino', '0473654985', '120 Boulevard Paul Langevin 38600 Fontaine'), 
(3, 'Crédit Agricole', '0476124578', '12, place des États-Unis 92127 Montrouge'), 
(4, 'Botanic', '0470408935', '35 rue René Cassin Parc de la Châtelaine 74240 Gaillard'), 
(5, 'A Raymond', '0476231582', '113 Berriat, 38000 Grenoble');

INSERT INTO moyenne (id, idUtilisateur, moyenne) VALUES
(1, 4, 16,45),
(2, 5, 18,12),
(3, 6, 11,08),
(4, 7, 14,76);

INSERT INTO projet (id, libelle, idUtilisateur, idUtilisateurReferent) VALUES
(1, 'Tombola', 0, 2),
(2, 'Cross',  0, 2),
(3, 'Bal de fin d''année',  0, 2),
(4, 'Récolte déchets',  0, 2);

INSERT INTO roles (id, role) VALUES
(1, 'Proviseur'),
(2, 'Enseignant'),
(3, 'Secrétariat'),
(4, 'Élève');

INSERT INTO utilisateurs (id, nomUtilisateur, mdp, prenom, idRole, idReferent, idClasse) VALUES 
(1, 'Diminuitto', '1234', 'Maxence', 1, 0, 0), -- Proviseur
(2, 'Roumanet', '1234', 'David', 2, 1, 0), -- Enseignant
(3, 'Dupont', '1234', 'Chiara', 3, 1, 0), -- Secretariat
(4, 'Kallouch', '1234', 'Wisam', 4, 2, 3), -- Eleve
(5, 'Benaboura', '1234', 'Aron', 4, 2, 4), -- Eleve
(6, 'Michaud', '1234', 'Pierre', 4, 2, 5), -- Eleve
(7, 'Bayer', '1234', 'Dawson', 4, 2, 6 ), -- Eleve
