import { Schema, model } from 'mongoose';

const tokenFCM = new Schema({
	token: {
		type: String,
		required: true
	}
});
export const modelTokenFCM = model('TokenFCM', tokenFCM);