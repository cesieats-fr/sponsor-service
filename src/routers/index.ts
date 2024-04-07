import express, { Router } from 'express';
import controller from '../controllers';

const router: Router = express.Router();

// Ajoute un parrainnage
router.post('/addSponsor', controller.addSponsor);

// Retourne un parrainage
router.get('/getSponsor/:id', controller.getSponsor);

// Retourne tous les parrainages de idSponsor
router.get('/getAllSponsors/:idSponsor', controller.getAllSponsors);

// Supprime un parrainnage
router.delete('/deleteSponsor', controller.deleteSponsor);

export default router;
