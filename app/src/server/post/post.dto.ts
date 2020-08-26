import { Post } from "./post";
import { IPost } from "../../client/dto/IPost";
import { RichTextBlock } from "prismic-reactjs";

export class PostDto implements IPost {
    id: string;
    title: string;
    slug: string;
    tags: string[];
    description: string;
    content: RichTextBlock[];
    createdAt: string;
    updatedAt: string;

    constructor(post: Post) {
        this.id = post.id;
        this.title = post.title;
        this.slug = post.slug;
        this.tags = post.tags;
        this.description = post.description;
        this.content = post.content;
        this.createdAt = post.createdAt?.toISOString() ?? "";
        this.updatedAt = post.updatedAt?.toISOString() ?? "";
    }
}
