import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
export class dbConfig {
	constructor() {
		this.connectDb();
	}
	private connectDb = () => {
        
		mongoose.connect("mongodb+srv://reinaldodevcontato:nH1WkpNsTrFm8sm4@cluster0.58lgzvf.mongodb.net/")
			.then(() => console.log('Connected!'));
	};
}