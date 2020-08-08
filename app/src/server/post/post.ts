import { IUserStrApiDto, User } from "../user/user";

export class Post {
    id: string;
    title: string;
    createdBy: User;
    updatedBy: User;

    constructor(dto?: IPostStrApiDto);
    constructor(id?: string, title?: string, createdBy?: User, updatedBy?: User);
    constructor(
        idOrDto: string | IPostStrApiDto = "",
        title: string = "",
        createdBy: User = new User(),
        updatedBy: User = new User(),
    ) {
        if (typeof idOrDto !== "string") {
            this.title = idOrDto.title;
            this.id = idOrDto.id;
            this.createdBy = new User(idOrDto.created_by);
            this.updatedBy = new User(idOrDto.updated_by);
        } else {
            this.id = idOrDto;
            this.title = title;
            this.createdBy = createdBy;
            this.updatedBy = updatedBy;
        }
    }
}

export interface IPostStrApiDto {
    id: string;
    title: string;
    created_by: IUserStrApiDto;
    updated_by: IUserStrApiDto;
}
