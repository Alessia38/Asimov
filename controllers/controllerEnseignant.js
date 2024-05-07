const ModelEnseignant = require('../models/enseignant')

const ControllerEnseignant = {
    // Lire des élèves de l'enseignant
    async getEleves(req, res) {
        try {
            const eleves = await ModelEnseignant.lireEleves();
            res.status(200).json({ eleves });
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la récupération de la liste des élèves de l'enseignant." });
        }
    },

    // Lire la moyenne générale d'un élève
    async getMoyenneGenerale(req, res) {
        try {
            const moyenneGenerale = await ModelEnseignant.lireMoyennesEleves();
            res.status(200).json({ moyenneGenerale });
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de l'affichage de la moyenne générale des élèves." });
        }
    },
    // Lire les projets disponibles
    async getProjets(req, res) {
        try {
            const projets = await ModelEnseignant.lireProjets();
            res.status(200).json({ projets });
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la récupération des projets disponibles." });
        }
    },

    // S'inscrire à un projet
    async inscriptionProjet(req, res) {
        const enseignantId = req.params.id;
        const projetId = req.body.projetId;
        try {
            await ModelEnseignant.inscriptionProjet(enseignantId, projetId);
            res.status(200).json({ message: "Inscription au projet réussie." });
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de l'inscription au projet." });
        }
    },

    // Lire les recherches de stage d'un élève
    async getRecherchesStage(req, res) {
        const { nom, prenom, classe } = req.query;
        try {
            const recherchesStage = await ModelEnseignant.lireRecherchesStage(nom, prenom, classe);
            res.status(200).json({ recherchesStage });
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la récupération des recherches de stage des élèves." });
        }
    },

    // Lire les conventions de stage d'un élève
    async getConventionsStage(req, res) {
        const enseignantId = req.params.id;
        try {
            const conventionsStage = await ModelEnseignant.lireConventionsStage(enseignantId);
            res.status(200).json({ conventionsStage });
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la récupération des conventions de stage de l'élève." });
        }
    },

    // Ajouter une convention de stage
    async addConventionsStage(req, res) {
        const enseignantId = req.params.id;
        try {
            const conventionsStage = await ModelEnseignant.ajouterConventionsStage(enseignantId);
            res.status(200).json({ conventionsStage });
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de l'ajout des conventions de stage de l'élève." });
        }
    },

    // Modifier une convention de stage
    async updateConventionsStage(req, res) {
        const enseignantId = req.params.id;
        try {
            const conventionsStage = await ModelEnseignant.modifierConventionsStage(enseignantId);
            res.status(200).json({ conventionsStage });
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la mise à jour des conventions de stage de l'élève." });
        }
    },

    // Supprimer une convention de stage
    async deleteConventionsStage(req, res) {
        const enseignantId = req.params.id;
        try {
            const conventionsStage = await ModelEnseignant.supprimerConventionsStage(enseignantId);
            res.status(200).json({ conventionsStage });
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la suppression des conventions de stage de l'élève." });
        }
    },

    // Lire les attestations de stage d'un élève
    async getAttestationsStage(req, res) {
        const enseignantId = req.params.id;
        try {
            const attestationsStage = await ModelEnseignant.lireAttestationsStage(enseignantId);
            res.status(200).json({ attestationsStage });
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la récupération des attestations de stage de l'élève." });
        }
    },

    // Ajouter une attestation de stage
    async addAttestationsStage(req, res) {
        const enseignantId = req.params.id;
        try {
            const conventionsStage = await ModelEnseignant.ajouterAttestationsStage(enseignantId);
            res.status(200).json({ conventionsStage });
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de l'ajout des attestations de stage de l'élève." });
        }
    },

    // Modifier une attestation de stage
    async updateAttestationsStage(req, res) {
        const enseignantId = req.params.id;
        try {
            const conventionsStage = await ModelEnseignant.modifierAttestationsStage(enseignantId);
            res.status(200).json({ conventionsStage });
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la mise à jour des attestations de stage de l'élève." });
        }
    },

    // Supprimer une attestation de stage
    async deleteAttestationsStage(req, res) {
        const enseignantId = req.params.id;
        try {
            const conventionsStage = await ModelEnseignant.supprimerAttestationsStage(enseignantId);
            res.status(200).json({ conventionsStage });
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la suppression des attestations de stage de l'élève." });
        }
    },
};

module.exports = ControllerEnseignant;