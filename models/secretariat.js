const mysql = require("mysql2");
const iniparser = require("iniparser");
const configDB = iniparser.parseSync("./DB.ini");

const mysqlconnexion = mysql.createConnection({
    host: configDB["dev"]["host"],
    user: configDB["dev"]["user"],
    password: configDB["dev"]["password"],
    database: configDB["dev"]["database"],
});

const ModelSecretariat = {
    // Récupérer toutes les moyennes depuis la base de données
    getMoyennes: () => {
        return new Promise((resolve, reject) => {
            mysqlconnexion.query('SELECT m.id, CONCAT(u.nom, " ", u.prenom) AS utilisateur, m.moyenne, m.semestre FROM moyenne m JOIN utilisateurs u ON m.idUtilisateur = u.id', (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    },

    getUtilisateurs: () => {
        return new Promise((resolve, reject) => {
            mysqlconnexion.query('SELECT * FROM utilisateurs WHERE idRole = 4', (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    },

    // Récupérer les détails d'une moyenne par son ID depuis la base de données
    getMoyenneById: (moyenneId) => {
        return new Promise((resolve, reject) => {
            mysqlconnexion.query('SELECT * FROM moyenne WHERE id = ?', [moyenneId], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result[0]); // Récupérer le premier résultat (s'il existe)
                }
            });
        });
    },

    // Mettre à jour la moyenne dans la base de données
    updateMoyenne: (moyenneId, nouvelleMoyenne) => {
        return new Promise((resolve, reject) => {
            mysqlconnexion.query('UPDATE moyenne SET moyenne = ? WHERE id = ?', [nouvelleMoyenne, moyenneId], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },

    // Supprimer une moyenne de la base de données
    supprimerMoyenne: (moyenneId) => {
        return new Promise((resolve, reject) => {
            mysqlconnexion.query('DELETE FROM moyenne WHERE id = ?', [moyenneId], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },

    //ajouter une nouvelle moyenne
    ajouterMoyenne: (utilisateurId, moyenne, semestre) => {
        return new Promise((resolve, reject) => {
            mysqlconnexion.query('INSERT INTO moyenne (idUtilisateur, moyenne, semestre) VALUES (?, ?, ?)', [utilisateurId, moyenne, semestre], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
    
};

module.exports = ModelSecretariat;
