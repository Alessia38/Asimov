/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouve la fonction liée au modèle de données de la connexion de l'utilisateur
 */

// Dépendances et middlewares
const mysql = require("mysql2");
let iniparser = require("iniparser");
const configDB = iniparser.parseSync("./DB.ini");

// Connection à la bdd
let mysqlconnexion = mysql.createConnection({
  host: configDB["dev"]["host"],
  user: configDB["dev"]["user"],
  password: configDB["dev"]["password"],
  database: configDB["dev"]["database"],
});

const modelConnexion = {
  // Connexion de l'utilisateur
  async connexion(req) {
    // Identifiant et mot de passe de l'utilisateur récupérés
    let utilNom = req.body.utilNom;
    let utilMdp = req.body.utilMdp;

    // Requête SQL pour la connexion du pharmacien
    let requete ="SELECT COUNT(*) FROM utilisateurs WHERE nomUtilisateur = ? AND mdp = ?";
    return new Promise((reussi, echec) => {
      mysqlconnexion.query(requete, [utilNom, utilMdp], (err, lignes) => {
        if (err) {
          return echec(err);}
        return reussi(lignes);
      });
    });
  },
};

module.exports = {
  modelConnexion,
};
