import { IRawUser } from "../interfaces/user.interface";

export class User {
public	constructor(rawUserData: IRawUser) {
		this.email = rawUserData.email;
		this.password = rawUserData.password;
		this.passwordConfirmation = rawUserData.password_confirmation;
	}
	public email: string;
	public password: string;
	public passwordConfirmation: string;

}
