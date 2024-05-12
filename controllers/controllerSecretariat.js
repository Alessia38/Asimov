const ModelSecretariat = require('../models/secretariat');

const ControllerSecretariat = {
    // Afficher la liste des moyennes avec un bouton pour modifier chaque moyenne
    moyenne: async (req, res) => {
        try {
            // Récupérer toutes les moyennes depuis la base de données
            const moyennes = await ModelSecretariat.getMoyennes();
            
            // Récupérer tous les utilisateurs depuis la base de données
            const utilisateurs = await ModelSecretariat.getUtilisateurs();
            
            res.render('saisirNotes', { moyennes, utilisateurs });
        } catch (error) {
            console.error('Erreur lors de la récupération des moyennes :', error);
            res.status(500).send('Une erreur est survenue lors du chargement des données.');
        }
    },

    // Afficher le formulaire pour ajouter une moyenne
    ajouter: async (req, res) => {
        try {
            // Récupérer toutes les moyennes depuis la base de données
            const moyennes = await ModelSecretariat.getMoyennes();
            
            // Récupérer tous les utilisateurs depuis la base de données
            const utilisateurs = await ModelSecretariat.getUtilisateurs();
            
            res.render('ajoutMoyenne', { moyennes, utilisateurs });
        } catch (error) {
            console.error('Erreur lors de la récupération des moyennes :', error);
            res.status(500).send('Une erreur est survenue lors du chargement des données.');
        }
    },

    //ajouter une moyenne dans la base de données 
    ajoutMoyenne: async (req, res) => {
        try {
            // Récupérer les données du formulaire
            const utilisateurId = req.body.utilisateurId;
            const moyenne = parseFloat(req.body.moyenne);
            const semestre = req.body.semestre;
    
            // Insérer la nouvelle moyenne dans la base de données
            await ModelSecretariat.ajouterMoyenne(utilisateurId, moyenne, semestre);
    
            // Rediriger vers une page de confirmation ou afficher un message de succès
            res.redirect('/secretariat/moyenne');
        } catch (error) {
            console.error('Erreur lors de l\'ajout de la moyenne :', error);
            res.status(500).send('Une erreur est survenue lors de l\'ajout de la moyenne.');
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
    },

    // Supprimer la moyenne de la base de données
    supprimerMoyenne: async (req, res) => {
        try {
            // Récupérer l'ID de la moyenne depuis les paramètres de l'URL
            const moyenneId = req.params.id;

            // Supprimer la moyenne de la base de données
            await ModelSecretariat.supprimerMoyenne(moyenneId);

            // Rediriger vers la liste des moyennes après la suppression
            res.redirect('/secretariat/moyenne');
        } catch (error) {
            console.error('Erreur lors de la suppression de la moyenne :', error);
            res.status(500).send('Une erreur est survenue lors de la suppression de la moyenne.');
        }
    }
};

module.exports = ControllerSecretariat;
