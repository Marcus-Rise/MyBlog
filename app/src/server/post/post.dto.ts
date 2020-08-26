import { Post } from "./post";
import { IPost } from "../../client/dto/IPost";

export class PostDto implements IPost {
    id: string;
    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;

    constructor(post: Post) {
        this.id = post.id;
        this.title = post.title;
        this.slug = post.slug;
        this.createdAt = post.createdAt?.toISOString() ?? "";
        this.updatedAt = post.updatedAt?.toISOString() ?? "";
    }
}
