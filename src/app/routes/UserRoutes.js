import { Router } from 'express';
import UserController from '../controllers/UserController.js';

const userRouter = Router();

const router = Router();

userRouter.use('/user', router);

router.get('/:id', UserController.show);

router.get('/', UserController.index);

export default userRouter;
