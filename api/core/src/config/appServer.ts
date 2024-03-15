import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConfig } from './dbConfig';
import { TokenFcmRoutes } from '../routes/tokenFCM';
import { UserRoutes } from '../routes/user';

export interface IExpress {
    error: Error, req: Request, res: Response, next: NextFunction
}
dotenv.config();
export class AppServer {
	private app: Application;
	constructor() {
		new dbConfig();
		this.app = express();
		this.configureMiddleware();
		this.configureRoutes();
		const port = Number(process.env.PORT || 3000);
		this.start(port);
	}

	private configureMiddleware() {
		this.app.use(express.json());
		this.app.use(cors({ origin: '*' }));
	}
	private start(port: number) {
		this.app.listen(port, () => {
			console.log(`Server running on port ${port}`);
		});
	}
	private configureRoutes() {
		this.app.use('/token', TokenFcmRoutes);
		this.app.use('/user', UserRoutes);

	}
}