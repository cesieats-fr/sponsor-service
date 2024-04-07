import express, { Router, Request, Response } from 'express';
import controller from '../controllers';

const router: Router = express.Router();

// Ajoute un parrainnage
router.post('/addSponsor', controller.addSponsor);

// Retourne un parrainage
router.get('/getSponsor/:id', controller.getSponsor);

// Retourne tous les parrainages de idSponsor
router.get('/getAllSponsor/:idSponsor', controller.getAllSponsor);

// Supprime un parrainnage
router.delete('/deleteSponsor', controller.deleteSponsor);

export default router;
