import { Request, Response } from 'express';
import { ISponsor } from 'cesieats-service-types/src/sponsor';
import { Sponsor } from '../database';

// Ajoute un parrainnage
const addSponsor = async (req: Request, res: Response) => {
  try{
    const order: ISponsor = {
      idSponsor: req.body.idSponsor,
      idSponsored: req.body.idSponsored,
    };
    const result = await Sponsor.create(order);
    console.log('result: ' + result);
    res.status(200).json(result);
  } catch (error) {
    console.log('[SPONSOR-SERVICE] addSponsor error: '+ error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Retourne un parrainage
const getSponsor = async (req: Request, res: Response) => {
  try {
    const result = await Sponsor.findById(req.params.id);
    console.log('result: ' + result);
    console.log('id: ' + req.params.id);
    res.status(200).json(result);
  } catch (error) {
    console.log('[SPONSOR-SERVICE] getSponsor error: '+ error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};  

// Retourne tous les parrainages de idSponsor
const getAllSponsors = async (req: Request, res: Response) => {
  try {
    const filter = {idSponsor: (String)(req.params.idSponsor)};
    const result = await Sponsor.find(filter);
    console.log('result: ' + result);
    console.log('id: ' + req.params.id);
    res.status(200).json(result);
  } catch (error) {
    console.log('[SPONSOR-SERVICE] getAllSponsors error: '+ error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};  

// Supprime un parrainnage
const deleteSponsor = async (req: Request, res: Response) => {
  try {
    const result = await Sponsor.findByIdAndDelete(req.body.id);
    console.log('result: ' + result);
    res.status(200).json(result);
  }  catch (error) {
    console.log('[SPONSOR-SERVICE] deleteSponsor error: '+ error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

const controller = {
  addSponsor,
  getSponsor,
  getAllSponsors,
  deleteSponsor,
};

export default controller;
