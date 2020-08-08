import { IUser } from "./IUser";

export interface IPost {
    id: string;
    title: string;
    createdBy: IUser;
}
