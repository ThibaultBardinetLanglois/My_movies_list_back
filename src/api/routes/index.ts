import { Router } from 'express';
import userRouter from './endpoints/user.routes';


const apiRouter: Router = Router();

apiRouter.use('/users', userRouter);


export default apiRouter;