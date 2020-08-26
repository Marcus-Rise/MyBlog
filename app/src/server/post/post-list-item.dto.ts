import { Post } from "./post";
import { IPostListItem } from "../../client/dto/IPostListItem";

export class PostListItemDto implements IPostListItem {
    id: string;
    title: string;
    slug: string;
    tags: string[];
    description: string;
    createdAt: string;
    updatedAt: string;

    constructor(post: Post) {
        this.id = post.id;
        this.title = post.title;
        this.slug = post.slug;
        this.tags = post.tags;
        this.description = post.description;
        this.createdAt = post.createdAt?.toISOString() ?? "";
        this.updatedAt = post.updatedAt?.toISOString() ?? "";
    }
}
