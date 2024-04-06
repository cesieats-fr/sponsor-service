import express, { Router, Request, Response } from 'express';
import controller from '../controllers';

const router: Router = express.Router();

router.post('/addSponsor/:idSponsor&:idSponsorised', controller.addSponsor);

router.get('/getSponsor/:id', controller.getSponsor);

router.get('/getAllSponsor/:idSponsor', controller.getAllSponsor);

router.delete('/deleteSponsor/:id', controller.deleteSponsor);

export default router;
