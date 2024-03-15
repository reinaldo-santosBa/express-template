import { Schema, model } from 'mongoose';

const user = new Schema({
	name: {
		type: String,
		required: true
	}
});
export const modelUser = model('User', user);