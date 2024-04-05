import { Request, Response } from 'express';

const addSponsor = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

const deleteSponsor = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

const getSponsor = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};  



const controller = {
  addSponsor,
  deleteSponsor,
  getSponsor,
};

export default controller;
