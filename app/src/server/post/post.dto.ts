import { Post } from "./post";
import { IPost } from "../../dto/IPost";
import { IUser } from "../../dto/IUser";
import { UserDto } from "../user/user.dto";

export class PostDto implements IPost {
    title: string;
    id: string;
    createdBy: IUser;

    constructor(post: Post) {
        this.title = post.title;
        this.id = post.id;
        this.createdBy = new UserDto(post.createdBy);
    }
}
