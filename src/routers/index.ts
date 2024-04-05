import express, { Router, Request, Response } from 'express';
import controller from './controller';

const router: Router = express.Router();
// deux id en paramètre, l'id du restaurant sponsor et l'id du restaurant
router.post('/addSponsor', controller.addSponsor);

// deux id en paramètre, l'id du restaurant sponsor et l'id du restaurant
router.delete('/deleteSponsor', controller.deleteSponsor);

router.get('/getSponsor/{idRestaurant}', controller.getSponsor);

export default router;
