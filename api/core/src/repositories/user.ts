import { AppError } from '../error/appError';
import { modelUser } from '../models/user';
import { User } from '../types/user';

export class UserRepository {
	public async create(name: string): Promise<User> {
		return new Promise((resolve, reject) => {
			const userModel = new modelUser({ name });
			userModel.save()
				.then((user) => resolve(user))
				.catch((error) => {
					throw new AppError(error)
				});
		});
	}
	public async readAll(): Promise<User[]> {
		return new Promise((resolve, reject) => {
			modelUser.find()
				.then((user) => resolve(user))
				.catch((error) => {
					throw new AppError(error)
				});
		});
	}
	public async read(name: string): Promise<User> {
		return new Promise((resolve, reject) => {
			modelUser.findOne({name})
				.then((user) => {
					if (user) {
						resolve(user);
					}
					resolve({name: ''});
				})
				.catch((error) => {
					throw new AppError(error)
				});
		});
	}
}   