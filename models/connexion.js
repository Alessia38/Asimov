const mysql = require("mysql2");
const iniparser = require("iniparser");
const configDB = iniparser.parseSync("./DB.ini");

const mysqlconnexion = mysql.createConnection({
  host: configDB["dev"]["host"],
  user: configDB["dev"]["user"],
  password: configDB["dev"]["password"],
  database: configDB["dev"]["database"],
});

const connexion = async (nomUtilisateur, mdp) => {
console.log("etape connexion" , nomUtilisateur, mdp)
  const requete = "SELECT COUNT(*) as compteur, role FROM utilisateurs JOIN roles ON utilisateurs.idRole = roles.id WHERE nomUtilisateur = ? AND mdp = ?";
  return new Promise((resolve, reject) => {
    mysqlconnexion.query(requete, [nomUtilisateur, mdp], (err, resultats) => {
      if (err) {
        reject(err);
      } else {
        resolve(resultats);
      }
    });
  });
};

module.exports = {
  connexion,
};
