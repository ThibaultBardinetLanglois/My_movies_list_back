import express from "express";
import { Request, Response, Express } from 'express';
import cors from 'cors';
import apiRouter from '../api/routes';
import { loggerMdw } from '../middlewares/console/logger.mdw';
import { morganMdw } from "../middlewares/console/morgan.mdw";
import config from "../config/index";

export default async function(app: Express) {
  
  app.enable('trust proxy');

  app.use(cors());
  app.use(express.json());
  app.use(loggerMdw); 
  app.use(morganMdw);
  app.use('/api', apiRouter);
  

  app.get('/status', (req: Request, res: Response) => { 
    res.status(200).send(`The server responds well on port ${config.server.port}`); 
  });
  
  app.listen(config.server.port, () => {
    console.log(`The application is listening on port ${config.server.port}!`);
  })
}
