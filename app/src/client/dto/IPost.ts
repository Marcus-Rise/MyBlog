import { RichTextBlock } from "prismic-reactjs";

export interface IPost {
    id: string;
    title: string;
    slug: string;
    content: RichTextBlock[];
    updatedAt: string;
    createdAt: string;
}
