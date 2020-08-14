export class User {
    id: string;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    isActive: boolean;
    roles: string[];
    blocked: boolean;

    constructor(dto?: IUserStrApiDto);
    constructor(
        id?: string,
        firstname?: string,
        lastname?: string,
        username?: string,
        email?: string,
        isActive?: boolean,
        blocked?: boolean,
        roles?: string[],
    );
    constructor(
        idOrDto: IUserStrApiDto | string = "",
        firstname = "",
        lastname = "",
        username = "",
        email = "",
        isActive = false,
        blocked = false,
        roles: string[] = [],
    ) {
        if (typeof idOrDto !== "string") {
            this.id = idOrDto.id;
            this.firstname = idOrDto.firstname;
            this.lastname = idOrDto.lastname;
            this.username = idOrDto.username ?? "";
            this.email = idOrDto.email;
            this.isActive = idOrDto.isActive;
            this.roles = idOrDto.roles;
            this.blocked = idOrDto.blocked;
        } else {
            this.id = idOrDto;
            this.firstname = firstname;
            this.lastname = lastname;
            this.username = username;
            this.email = email;
            this.isActive = isActive;
            this.roles = roles;
            this.blocked = blocked;
        }
    }
}

export interface IUserStrApiDto {
    id: string;
    firstname: string;
    lastname: string;
    username: string | null;
    email: string;
    password: string;
    resetPasswordToken: string;
    registrationToken: string;
    isActive: boolean;
    roles: string[];
    blocked: boolean;
}
