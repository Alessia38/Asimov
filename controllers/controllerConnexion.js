const modelConnexion = require('../models/connexion');

const controlConnexion = {

    async Connexion(req, res) {
        try {
            const nomUtilisateur = req.body.nomUtilisateur; 
            const mdp = req.body.mdp;
            console.log("etape controller ", nomUtilisateur, mdp)
            const util = await modelConnexion.connexion(nomUtilisateur, mdp); // Cette fonction valide et récupère les informations d'identification de l'utilisateur
            console.log(util, util[0].compteur)
            if (util[0].compteur == 1) {
                res.redirect('/accueil')
            } else {
                res.redirect("/"); // Rediriger vers la page de connexion en cas d'échec d'authentification
            }
        } catch (error) {
            console.log(error);
            res.redirect("/"); // Rediriger vers la page de connexion en cas d'erreur
        }
    }
}

module.exports = {
    controlConnexion
}
