import { Post } from "./post";
import { IPost } from "../../client/dto/IPost";
import { RichTextBlock } from "prismic-reactjs";

export class PostDto implements IPost {
    id: string;
    title: string;
    slug: string;
    content: RichTextBlock[];
    createdAt: string;
    updatedAt: string;

    constructor(post: Post) {
        this.id = post.id;
        this.title = post.title;
        this.slug = post.slug;
        this.content = post.content;
        this.createdAt = post.createdAt?.toISOString() ?? "";
        this.updatedAt = post.updatedAt?.toISOString() ?? "";
    }
}
