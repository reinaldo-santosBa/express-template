import { AppError } from '../error/appError';
import { UserRepository } from '../repositories/user';
import { User } from '../types/user';

export class UserService {
	private userService = new UserRepository();

	public async get(): Promise<User[]> {
		return new Promise((resolve, reject) => {
			this.userService.readAll()
				.then((users) => resolve(users))
				.catch((error) => {
					throw new AppError(error)
				});
		});
	}
	public async getByName(name: string): Promise<User> {
		return new Promise((resolve, reject) => {
			this.userService.read(name)
				.then((users) => resolve(users))
				.catch((error) => {
					throw new AppError(error)
				});
		});
	}
	public async create(name: string): Promise<User> {
		return new Promise((resolve, reject) => {
			this.userService.create(name)
				.then((users) => resolve(users))
				.catch((error) => {
					throw new AppError(error)
				});
		});
	}
}