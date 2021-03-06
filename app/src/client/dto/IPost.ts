import { RichTextBlock } from "prismic-reactjs";

export interface IPost {
    id: string;
    title: string;
    slug: string;
    tags: string[];
    description: string;
    content: RichTextBlock[];
    updatedAt: string;
    createdAt: string;
}
