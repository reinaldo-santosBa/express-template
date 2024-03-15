import { UserController } from '../controllers/user';
import express from 'express';

export const UserRoutes = express.Router();
const userController = new UserController();
UserRoutes.get('/', userController.get);
UserRoutes.post('/', userController.create);
UserRoutes.get('/:name', userController.getByName);
