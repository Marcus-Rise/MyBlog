import { Post } from "./post";
import { IPost } from "../../dto/IPost";
import { IUser } from "../../dto/IUser";
import { UserDto } from "../user/user.dto";

export class PostDto implements IPost {
    id: string;
    title: string;
    slug: string;
    description: string;
    text: string;
    createdBy: IUser;
    createdAt: string;
    updatedAt: string;
    updatedBy: IUser;

    constructor(post: Post) {
        this.id = post.id;
        this.title = post.title;
        this.slug = post.slug;
        this.description = post.description;
        this.text = post.text;
        this.createdBy = new UserDto(post.createdBy);
        this.updatedBy = new UserDto(post.updatedBy);
        this.createdAt = post.createdAt.toISOString();
        this.updatedAt = post.updatedAt.toISOString();
    }
}
