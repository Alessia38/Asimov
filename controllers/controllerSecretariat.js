const modelSecretariat = require('../models/secretariat');

async function moyenne(req, res) {
    try {
        res.render('saisirNotes');

    } catch (error) {
        console.log(error);
        res.redirect("/"); // Rediriger vers la page de connexion en cas d'erreur
    }
}

module.exports = {
    moyenne
};
