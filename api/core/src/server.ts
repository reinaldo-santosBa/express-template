import express, { Application, NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import dotenv from 'dotenv';
import { ErrorHandler } from './middlewares/errorHandle';
import { TokenFcmRoutes } from './routes/tokenFCM';
import { UserRoutes } from './routes/user';
import { AppError } from './error/appError';
import { dbConfig } from './config/dbConfig';
dotenv.config();
new dbConfig();

const app = express();
app.use(express.json());
app.use(cors({ origin: '*', credentials: true, }));
app.use('/token', TokenFcmRoutes);
app.use('/user', UserRoutes);
app.get('/', (req: Request, res: Response) => {
    res.json({msg: 'hello'})
})
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new AppError('Route not found', 404);
    next(error);
});

app.use(ErrorHandler);
const port = Number(process.env.PORT || 3000);
if (!module.parent) {
    app.listen(3000);
    console.log("Express started on port 3000");
}
//export const server = new AppServer();
export default app;