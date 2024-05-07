// Dépendances et middlewares
const mysql = require('mysql2');
let iniparser = require('iniparser');
const configDB = iniparser.parseSync('./DB.ini')

// Connection à la bdd
let mysqlconnexion = mysql.createConnection({
    host:configDB['dev']['host'],
    user:configDB['dev']['user'],
    password:configDB['dev']['password'],
    database:configDB['dev']['database']
})

const ModelEnseignant = {
    // Lire la liste des élèves de l'enseignant
    async lireEleves(enseignantId) {
        let requete = "SELECT * FROM utilisateurs WHERE idEnseignantReferent = ?";
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [enseignantId], (err, lignes) => {
                if (err) {
                    return echec(err);
                }
                return reussi(lignes);
            });
        });
    },

    // Lire la moyenne générale des élèves
    async lireMoyenneEleves(nom, prenom, classe) {
        let requete = "SELECT u.nom, u.prenom, m.moyenne FROM utilisateurs u JOIN moyenne m ON u.id = m.idUtilisateur WHERE u.nom = ? AND u.prenom = ? AND u.idClasse = ?";
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [nom, prenom, classe], (err, lignes) => {
                if (err) {
                    return echec(err);
                }
                return reussi(lignes);
            });
        });
    },

    // Lire la liste des projets disponibles
    async lireProjets() {
        let requete = "SELECT libelle FROM projet";
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, (err, lignes) => {
                if (err) {
                    return echec(err);
                }
                return reussi(lignes);
            });
        });
    },

    // S'inscrire à un projet
    async InscriptionProjet(eleveId, projetId) {
        let requete = "UPDATE projet SET idUtilisateur = ?, idUtilisateurReferent = ? WHERE id = ?";
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [eleveId, eleveId, projetId], (err, lignes) => {
                if (err) {
                    return echec(err);
                }
                return reussi(lignes);
            });
        });
    },

    // Lire les recherches de stage des élèves 
    async lireRecherchesStage(nom, prenom, classe) {
        let requete = "SELECT e.*, d.idUtilisateur FROM entreprise e JOIN demandesstages d ON e.id = d.idEntreprise JOIN utilisateurs u ON d.idUtilisateur = u.id WHERE u.nom = ? AND u.prenom = ? AND u.idClasse = ?";
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [nom, prenom, classe], (err, lignes) => {
                if (err) {
                    return echec(err);
                }
                return reussi(lignes);
            });
        });
    },

    // Lire les conventions de stage d'un élève
    async lireConventionsStage(eleveId) {
        let requete = "SELECT * FROM conventions WHERE idUtilisateur = ?";
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [eleveId], (err, lignes) => {
                if (err) {
                    return echec(err);
                }
                return reussi(lignes);
            });
        });
    },

    // Ajouter une convention de stage
    async ajouterConventionStage(eleveId, details) {
        let requete = "INSERT INTO conventions (idUtilisateur, details) VALUES (?, ?)";
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [eleveId, details], (err, resultats) => {
                if (err) {
                    return echec(err);
                }
                return reussi(resultats);
            });
        });
    },

    // Modifier une convention de stage
    async modifierConventionStage(conventionId, details) {
        let requete = "UPDATE conventions SET details = ? WHERE id = ?";
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [details, conventionId], (err, resultats) => {
                if (err) {
                    return echec(err);
                }
                return reussi(resultats);
            });
        });
    },

    // Supprimer une convention de stage
    async supprimerConventionStage(conventionId) {
        let requete = "DELETE FROM conventions WHERE id = ?";
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [conventionId], (err, resultats) => {
                if (err) {
                    return echec(err);
                }
                return reussi(resultats);
            });
        });
    },

    // Lire les attestations de stage d'un élève
    async lireAttestationsStage(eleveId) {
        let requete = "SELECT * FROM attestations WHERE idUtilisateur = ?";
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [eleveId], (err, lignes) => {
                if (err) {
                    return echec(err);
                }
                return reussi(lignes);
            });
        });
    },

    // Ajouter une attestation de stage
    async ajouterAttestationStage(eleveId, details) {
        let requete = "INSERT INTO attestations (idUtilisateur, details) VALUES (?, ?)";
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [eleveId, details], (err, resultats) => {
                if (err) {
                    return echec(err);
                }
                return reussi(resultats);
            });
        });
    },

    // Modifier une attestation de stage
    async modifierAttestationStage(attestationId, details) {
        let requete = "UPDATE attestations SET details = ? WHERE id = ?";
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [details, attestationId], (err, resultats) => {
                if (err) {
                    return echec(err);
                }
                return reussi(resultats);
            });
        });
    },

    // Supprimer une attestation de stage
    async supprimerAttestationStage(attestationId) {
        let requete = "DELETE FROM attestations WHERE id = ?";
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [attestationId], (err, resultats) => {
                if (err) {
                    return echec(err);
                }
                return reussi(resultats);
            });
        });
    }
};

module.exports = {
    ModelEnseignant
};
