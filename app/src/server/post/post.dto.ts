import { Post } from "./post";
import { IPost } from "../../dto/IPost";

export class PostDto implements IPost {
    title: string;
    id: string;

    constructor(post: Post) {
        this.title = post.title;
        this.id = post.id;
    }
}
