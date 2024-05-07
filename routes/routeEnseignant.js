// Routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlEnseignant = require('../controllers/controllerEnseignant.js');

routeur.get('/eleve', ctrlEnseignant.getEleves)
routeur.get('/moyenne', ctrlEnseignant.getMoyenneGenerale)
routeur.get('/projet', ctrlEnseignant.getProjets)
routeur.post('/projet/inscription', ctrlEnseignant.inscriptionProjet)
routeur.get('/stage', ctrlEnseignant.getRecherchesStage)
routeur.get('/stage/convention', ctrlEnseignant.getConventionsStage)
routeur.post('/stage/convention/ajouter', ctrlEnseignant.addConventionsStage)
routeur.put('/stage/convention/modifier', ctrlEnseignant.updateConventionsStage)
routeur.delete('/stage/convention/supprimer', ctrlEnseignant.deleteConventionsStage)
routeur.get('/stage/attestation', ctrlEnseignant.getAttestationsStage)
routeur.post('/stage/attestation/ajouter', ctrlEnseignant.addAttestationsStage)
routeur.put('/stage/attestation/modifier', ctrlEnseignant.updateAttestationsStage)
routeur.delete('/stage/attestation/supprimer', ctrlEnseignant.deleteAttestationsStage)

module.exports = routeur;