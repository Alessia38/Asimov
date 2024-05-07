const ModelSecretariat = require('../models/secretariat');

const ControllerSecretariat = {
    // Afficher la liste des moyennes avec un bouton pour modifier chaque moyenne
    moyenne: async (req, res) => {
        try {
            // Récupérer toutes les moyennes depuis la base de données
            const moyennes = await ModelSecretariat.getMoyennes();
            res.render('saisirNotes', { moyennes });
        } catch (error) {
            console.error('Erreur lors de la récupération des moyennes :', error);
            res.status(500).send('Une erreur est survenue lors du chargement des données.');
        }
    },

    // Afficher la page de modification de la moyenne
    getModifierMoyenne: async (req, res) => {
        try {
            // Récupérer l'ID de la moyenne depuis les paramètres de l'URL
            const moyenneId = req.params.id;
    
            // Récupérer les détails de la moyenne depuis la base de données
            const moyenne = await ModelSecretariat.getMoyenneById(moyenneId);
    
            if (!moyenne) {
                // Si aucune moyenne n'est trouvée avec l'ID donné, renvoyer une erreur 404
                return res.status(404).send("Moyenne non trouvée");
            }
            
            // Afficher la page de modification avec les détails de la moyenne
            res.render('modifierMoyenne', { moyenne });
        } catch (error) {
            console.error('Erreur lors de la récupération de la moyenne :', error);
            res.status(500).send('Une erreur est survenue lors du chargement des données.');
        }
    },

    // Mettre à jour la moyenne dans la base de données
    postModifierMoyenne: async (req, res) => {
        try {
            // Récupérer l'ID de la moyenne et la nouvelle moyenne depuis les données de la requête
            const moyenneId = req.params.id;
            const nouvelleMoyenne = req.body.nouvelleMoyenne;

            // Mettre à jour la moyenne dans la base de données
            await ModelSecretariat.updateMoyenne(moyenneId, nouvelleMoyenne);

            // Rediriger vers la liste des moyennes après la mise à jour
            res.redirect('/secretariat/moyenne');
        } catch (error) {
            console.error('Erreur lors de la mise à jour de la moyenne :', error);
            res.status(500).send('Une erreur est survenue lors de la mise à jour de la moyenne.');
        }
    }
};

module.exports = ControllerSecretariat;
