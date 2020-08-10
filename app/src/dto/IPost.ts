import { IUser } from "./IUser";

export interface IPost {
    id: string;
    title: string;
    description: string;
    createdBy: IUser;
    updatedBy: IUser;
    updatedAt: string;
    createdAt: string;
}
