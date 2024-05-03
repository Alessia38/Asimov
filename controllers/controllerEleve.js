const ModelEleve = require('../models/eleve')

const ControllerEleve = {
    // Lire l'enseignant référent d'un élève
    async getEnseignantReferent(req, res) {
        const eleveId = req.params.id;
        try {
            const enseignantReferent = await ModelEleve.lireEnseignantReferent(eleveId);
            res.status(200).json({ enseignantReferent });
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la récupération de l'enseignant référent de l'élève." });
        }
    },

    // Lire la moyenne générale d'un élève
    async getMoyenneGenerale(req, res) {
        const eleveId = req.params.id;
        try {
            const moyenneGenerale = await ModelEleve.lireMoyenneGenerale(eleveId);
            res.status(200).json({ moyenneGenerale });
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la récupération de la moyenne générale de l'élève." });
        }
    },

    // Lire les projets disponibles
    async getProjets(req, res) {
        try {
            const projets = await ModelEleve.lireProjets();
            res.status(200).json({ projets });
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la récupération des projets disponibles." });
        }
    },

    // S'inscrire à un projet
    async inscriptionProjet(req, res) {
        const eleveId = req.params.id;
        const projetId = req.body.projetId;
        try {
            await ModelEleve.InscriptionProjet(eleveId, projetId);
            res.status(200).json({ message: "Inscription au projet réussie." });
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de l'inscription au projet." });
        }
    },

    // Lire les recherches de stage d'un élève
    async getRecherchesStage(req, res) {
        const eleveId = req.params.id;
        try {
            const recherchesStage = await ModelEleve.lireRecherchesStage(eleveId);
            res.status(200).json({ recherchesStage });
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la récupération des recherches de stage de l'élève." });
        }
    },

    // Lire les conventions de stage d'un élève
    async getConventionsStage(req, res) {
        const eleveId = req.params.id;
        try {
            const conventionsStage = await ModelEleve.lireConventionsStage(eleveId);
            res.status(200).json({ conventionsStage });
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la récupération des conventions de stage de l'élève." });
        }
    },

    // Lire les attestations de stage d'un élève
    async getAttestationsStage(req, res) {
        const eleveId = req.params.id;
        try {
            const attestationsStage = await ModelEleve.lireAttestationsStage(eleveId);
            res.status(200).json({ attestationsStage });
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la récupération des attestations de stage de l'élève." });
        }
    }
};

module.exports = ControllerEleve;