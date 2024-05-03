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
                        res.redirect('/eleve');
                        break;
                    case 'proviseur':
                        res.redirect('/proviseur');
                        break;
                    case 'enseignant':
                        res.redirect('/enseignant');
                        break;
                    case 'secrétariat':
                        res.redirect('/secrétariat');
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
