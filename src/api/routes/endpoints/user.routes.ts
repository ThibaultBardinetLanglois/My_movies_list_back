import { Router } from 'express';
import * as UserController from '../../controllers/user.controller';

const userRouter: Router = Router();

userRouter.get('/', UserController.getAll);




export default userRouter;