// Dépendances et middlewares
const mysql = require("mysql2");
let iniparser = require("iniparser");
const configDB = iniparser.parseSync("./DB.ini");

// Connexion à la bdd
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
    let nomUtilisateur = req.body.nomUtilisateur;
    let mdp = req.body.mdp;

    // Requête SQL pour la connexion du pharmacien
    let requete ="SELECT COUNT(*), role FROM utilisateurs JOIN roles ON utilisateurs.idRole = roles.id WHERE nomUtilisateur = ? AND mdp = ?";
    return new Promise((reussi, echec) => {
      mysqlconnexion.query(requete, [nomUtilisateur, mdp], (err, lignes) => {
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
