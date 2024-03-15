import { TokenFcmController } from '../controllers/tokenFCM';
import express from 'express';

export const TokenFcmRoutes = express.Router();
const tokenFcmController = new TokenFcmController();
TokenFcmRoutes.get('/', tokenFcmController.get);
TokenFcmRoutes.post('/', tokenFcmController.create);
TokenFcmRoutes.post('/send', tokenFcmController.sendNotifcation);
TokenFcmRoutes.post('/sendAll', tokenFcmController.sendNotifcationAll);