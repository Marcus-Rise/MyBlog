import { Document } from "prismic-javascript/types/documents";
import { RichTextBlock } from "prismic-reactjs";

export class Post {
    id: string;
    title: string;
    slug: string;
    tags: string[];
    description: string;
    content: RichTextBlock[];
    createdAt: Date | null;
    updatedAt: Date | null;

    constructor(dto?: IPostApiDto);
    constructor(
        id?: string,
        title?: string,
        slug?: string,
        tags?: string[],
        description?: string,
        content?: RichTextBlock[],
        createdAt?: Date | null,
        updatedAt?: Date | null,
    );
    constructor(
        idOrDto: string | IPostApiDto = "",
        title = "",
        slug = "",
        tags: string[] = [],
        description = "",
        content: RichTextBlock[] = [],
        createdAt: Date | null = null,
        updatedAt: Date | null = null,
    ) {
        if (typeof idOrDto !== "string") {
            this.title = idOrDto.data.title[0].text;
            this.slug = idOrDto.uid ?? idOrDto.slugs[0];
            this.tags = idOrDto.tags;
            this.description = "";
            this.content = idOrDto.data.body.flatMap((i) => i.primary).flatMap((i) => i.text);
            this.id = idOrDto.id;
            this.createdAt = idOrDto.first_publication_date ? new Date(idOrDto.first_publication_date) : null;
            this.updatedAt = idOrDto.last_publication_date ? new Date(idOrDto.last_publication_date) : null;
        } else {
            this.id = idOrDto;
            this.title = title;
            this.slug = slug;
            this.tags = tags;
            this.description = description;
            this.content = content;
            this.createdAt = createdAt;
            this.updatedAt = updatedAt;
        }
    }
}

interface Slice {
    slice_type: "text";
    slice_label: null;
    primary: {
        text: RichTextBlock[];
    };
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
        body: Slice[];
    };
}
