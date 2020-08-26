import { Document } from "prismic-javascript/types/documents";

export class Post {
    id: string;
    title: string;
    slug: string;
    tags: string[];
    description: string;
    text: string;
    createdAt: Date | null;
    updatedAt: Date | null;

    constructor(dto?: IPostApiDto);
    constructor(
        id?: string,
        title?: string,
        slug?: string,
        tags?: string[],
        description?: string,
        text?: string,
        createdAt?: Date | null,
        updatedAt?: Date | null,
    );
    constructor(
        idOrDto: string | IPostApiDto = "",
        title = "",
        slug = "",
        tags: string[] = [],
        description = "",
        text = "",
        createdAt: Date | null = null,
        updatedAt: Date | null = null,
    ) {
        if (typeof idOrDto !== "string") {
            this.title = idOrDto.data.title[0].text;
            this.slug = idOrDto.uid ?? idOrDto.slugs[0];
            this.tags = idOrDto.tags;
            this.description = "";
            this.text = "";
            this.id = idOrDto.id;
            this.createdAt = idOrDto.first_publication_date ? new Date(idOrDto.first_publication_date) : null;
            this.updatedAt = idOrDto.last_publication_date ? new Date(idOrDto.last_publication_date) : null;
        } else {
            this.id = idOrDto;
            this.title = title;
            this.slug = slug;
            this.tags = tags;
            this.description = description;
            this.text = text;
            this.createdAt = createdAt;
            this.updatedAt = updatedAt;
        }
    }
}

export interface IPostApiDto extends Document {
    data: {
        title: [
            {
                type: "heading1";
                text: string;
                spans: [];
            },
        ];
        content: [
            {
                type: "preformatted";
                text: string;
                spans: [];
            },
            {
                type: "image";
                url: string;
                alt: string;
                copyright: null;
                dimensions: {
                    width: number;
                    height: number;
                };
            },
        ];
    };
}
