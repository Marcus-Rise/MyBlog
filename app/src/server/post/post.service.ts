import { Inject, Injectable, Logger } from "@nestjs/common";
import { Post } from "./post";
import { API_PROVIDER, IApi } from "../prismic/prismic.types";
import Prismic from "prismic-javascript";

@Injectable()
export class PostService {
    constructor(
        @Inject(API_PROVIDER)
        private readonly api: IApi,
        private readonly logger: Logger,
    ) {}

    async get(page: number): Promise<{ nextPage: number | null; items: Post[] }> {
        let posts: Post[] = [];
        let nextPage = null;

        await this.api
            .query(Prismic.Predicates.at("document.type", "post"), {
                orderings: "[document.first_publication_date desc]",
                pageSize: 10,
                page,
            })
            .then((data) => {
                posts = data.results.map((i) => new Post(i));

                const find = data.next_page.match(/page=(\d)/);

                if (find) {
                    nextPage = Number(find[1]);
                }
            })
            .catch((e) => {
                this.logger.error(e, e, PostService.name);
            });

        return { nextPage, items: posts };
    }

    async getBySlug(slug: string): Promise<Post | null> {
        let post: Post | null = null;

        await this.api
            .getByUID("post", slug, {})
            .then((data) => {
                if (data) {
                    post = new Post(data);
                }
            })
            .catch((e) => {
                this.logger.error(e, e, PostService.name);
            });

        return post;
    }
}
