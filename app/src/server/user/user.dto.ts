import { IUser } from "../../dto/IUser";
import { User } from "./user";

export class UserDto implements IUser {
    email: string;
    firstname: string;
    id: string;
    lastname: string;
    username: string;

    constructor(user: User) {
        this.id = user.id;
        this.email = user.email;
        this.firstname = user.firstname;
        this.lastname = user.lastname;
        this.username = user.username;
    }
}
