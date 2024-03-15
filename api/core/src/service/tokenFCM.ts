import axios from 'axios';
import { TokenFcmRepository } from '../repositories/tokenFCM';
import { Token } from '../types/tokenFCM';
interface props {
	msg: string;
	token: string;
	title: string;
}
export class TokenFcmService {
	private serviceTokenFcm = new TokenFcmRepository();

	public async get(): Promise<Token[]>{
		return new Promise((resolve, reject) => {
			this.serviceTokenFcm.readAll()
				.then((tokens) => resolve(tokens))
				.catch(() => reject(false));
		});
	}
	public async create(token: string): Promise<Token> {
		return new Promise((resolve, reject) => {
			this.serviceTokenFcm.create(token)
				.then((token) => resolve(token))
				.catch(() => reject(false));
		});
	}

	async sendNotification({ msg, title, token }: props) {

		const body = {
			to: token,
			'collapse_key': 'type_a',
			'notification': {
				'body': msg,
				'title': title
			}
		};
		const headers = {
			Authorization: 'key=AAAAnmab3j0:APA91bHdi9UFrGEhtcTT833E50fNeqgAiG-a53cjNGR5uEupIKTqrKiLl6XFXZQ231fGTySh35ngFsjwsE-BzKw1Z-QzhGamXyQT4Y0EMqtcUmbPth6oT1UMNlo9A1TA7010bkLVikWq'
		};
		axios.post(
			'https://fcm.googleapis.com/fcm/send',
			body,
			{
				headers
			},

		)
			.then((response) => {
				return response;
			})
			.catch(err => { 
				return err;
			});
	}

	async sendNotificationAll({ msg, title }: props) {
		let arrayToken:Token[] = [];
		this.get().then((response) => {
			arrayToken = response;

			for (let i = 0; i < arrayToken.length; i++) {
				const body = {
					to: arrayToken[i].token,
					'collapse_key': 'type_a',
					'notification': {
						'body': msg,
						'title': title
					}
				};
				const headers = {
					Authorization: 'key=AAAAnmab3j0:APA91bHdi9UFrGEhtcTT833E50fNeqgAiG-a53cjNGR5uEupIKTqrKiLl6XFXZQ231fGTySh35ngFsjwsE-BzKw1Z-QzhGamXyQT4Y0EMqtcUmbPth6oT1UMNlo9A1TA7010bkLVikWq'
				};
				axios.post(
					'https://fcm.googleapis.com/fcm/send',
					body,
					{
						headers
					},

				)
					.then((response) => {
						return response;
					})
					.catch(err => {
						return err;
					});
			}
		});
	}
}