import { Request, Response, NextFunction, RequestHandler } from 'express';

import jwt from 'jsonwebtoken';

export const middleware: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, process.env.JWT_KEY!, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Unauthorized' });

    res.locals.identity = decoded;
    next();
  });
};