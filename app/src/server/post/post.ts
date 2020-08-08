export class Post {
    id: string;
    title: string;

    constructor(dto?: IPostStrApiDto);
    constructor(id?: string, title?: string);
    constructor(idOrDto: string | IPostStrApiDto = "", title: string = "") {
        if (typeof idOrDto !== "string") {
            this.title = idOrDto.title;
            this.id = idOrDto.id;
        } else {
            this.id = idOrDto;
            this.title = title;
        }
    }
}

interface IEditor {
    id: string;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    resetPasswordToken: string;
    registrationToken: string;
    isActive: boolean;
    roles: string[];
    blocked: boolean;
}

export interface IPostStrApiDto {
    id: string;
    title: string;
    created_by: IEditor;
    updated_by: IEditor;
}
