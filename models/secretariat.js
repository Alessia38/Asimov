const mysql = require("mysql2");
const iniparser = require("iniparser");
const configDB = iniparser.parseSync("./DB.ini");

const ModelSecretaire = {
    // Récupérer les élèves depuis la base de données
    getEleves: () => {
        return new Promise((resolve, reject) => {
            mysqlconnexion.query('SELECT id, nom, prenom FROM utilisateurs WHERE idRole = ?', [1], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
};

module.exports = ModelSecretaire;
