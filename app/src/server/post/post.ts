import { IUserStrApiDto, User } from "../user/user";

export class Post {
    id: string;
    title: string;
    description: string;
    createdBy: User;
    updatedBy: User;
    createdAt: Date;
    updatedAt: Date;

    constructor(dto?: IPostStrApiDto);
    constructor(
        id?: string,
        title?: string,
        description?: string,
        createdBy?: User,
        updatedBy?: User,
        createdAt?: Date,
        updatedAt?: Date,
    );
    constructor(
        idOrDto: string | IPostStrApiDto = "",
        title: string = "",
        description: string = "",
        createdBy: User = new User(),
        updatedBy: User = new User(),
        createdAt: Date = new Date(),
        updatedAt: Date = new Date(),
    ) {
        if (typeof idOrDto !== "string") {
            this.title = idOrDto.title;
            this.description = idOrDto.description;
            this.id = idOrDto.id;
            this.createdBy = new User(idOrDto.created_by);
            this.updatedBy = new User(idOrDto.updated_by);
            this.createdAt = new Date(idOrDto.created_at);
            this.updatedAt = new Date(idOrDto.updated_at);
        } else {
            this.id = idOrDto;
            this.title = title;
            this.description = description;
            this.createdBy = createdBy;
            this.updatedBy = updatedBy;
            this.createdAt = createdAt;
            this.updatedAt = updatedAt;
        }
    }
}

export interface IPostStrApiDto {
    id: string;
    title: string;
    description: string;
    created_by: IUserStrApiDto;
    updated_by: IUserStrApiDto;
    created_at: string;
    updated_at: string;
}
