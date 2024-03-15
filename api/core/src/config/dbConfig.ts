import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
export class dbConfig {
	constructor() {
		this.connectDb();
	}
	private connectDb = () => {
        
		mongoose.connect(process.env.connectString + '')
			.then(() => console.log('Connected!'));
	};
}