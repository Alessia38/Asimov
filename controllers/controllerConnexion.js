/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouve le contrôleur de la connexion
*/

const modelConnexion = require('../models/connexion');

const controlConnexion = {

    async Connexion(req, res) {
        try {
            const { nomUtilisateur, mdp } = req.body;
            const util = await modelConnexion.ConnexionUtilisateur(nomUtilisateur, mdp); // Cette fonction valide et récupère les informations d'identification de l'utilisateur

            if (util) {
                
                // Vérifie le rôle de l'utilisateur et redirige en conséquence
                switch (util.role) {
                    case 'élève':
                        res.redirect('/dashboard_eleve');
                        break;
                    case 'proviseur':
                        res.redirect('/dashboard_proviseur');
                        break;
                    case 'enseignant':
                        res.redirect('/dashboard_enseignant');
                        break;
                    case 'secrétariat':
                        res.redirect('/dashboard_secrétariat');
                        break;
                    default:
                        res.redirect('/connexion');
                }
            } else {
                res.redirect("/connexion"); // Rediriger vers la page de connexion en cas d'échec d'authentification
            }
        } catch (error) {
            console.log(error);
            res.redirect("/connexion"); // Rediriger vers la page de connexion en cas d'erreur
        }
    }
}

module.exports = {
    controlConnexion
}
