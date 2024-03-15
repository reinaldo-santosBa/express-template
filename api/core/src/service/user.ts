import { UserRepository } from '../repositories/user';
import { User } from '../types/user';

export class UserService {
	private userService = new UserRepository();

	public async get(): Promise<User[]> {
		return new Promise((resolve, reject) => {
			this.userService.readAll()
				.then((users) => resolve(users))
				.catch(() => reject(false));
		});
	}
	public async getByName(name: string): Promise<User> {
		return new Promise((resolve, reject) => {
			this.userService.read(name)
				.then((users) => resolve(users))
				.catch(() => reject(false));
		});
	}
	public async create(name: string): Promise<User> {
		return new Promise((resolve, reject) => {
			this.userService.create(name)
				.then((users) => resolve(users))
				.catch(() => reject(false));
		});
	}
}