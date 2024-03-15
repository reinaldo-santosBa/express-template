import { Request, Response } from 'express';
import { UserService } from '../service/user';
export class UserController {
	async get(request: Request, response: Response): Promise<Response> {
		const userService = new UserService();
		const userServiceGet = await userService.get();
		return response.status(200).json(userServiceGet);
	}
	async getByName(request: Request, response: Response): Promise<Response> {
		const { name } = request.params;
		const userService = new UserService();
		const userServiceCreate = await userService.getByName(name);
		return response.status(200).json(userServiceCreate);
	}
	async create(request: Request, response: Response): Promise<Response> {
		const { name } = request.body;
		const userService = new UserService();
		const userServiceCreate = await userService.create(name);
		return response.status(200).json(userServiceCreate);
	}
}