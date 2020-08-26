import { Inject, Injectable, Logger } from "@nestjs/common";
import { Post } from "./post";
import { API_PROVIDER, IApi } from "../prismic/prismic.types";

@Injectable()
export class PostService {
    constructor(
        @Inject(API_PROVIDER)
        private readonly api: IApi,
        private readonly logger: Logger,
    ) {}

    async get(): Promise<Post[]> {
        let posts: Post[] = [];

        await this.api
            .query("")
            .then((data) => {
                this.logger.debug(data, PostService.name);
                posts = data.results.map((i) => new Post(i));
            })
            .catch((e) => {
                this.logger.error(e, e, PostService.name);
            });

        return posts;
    }

    async getBySlug(slug: string): Promise<Post | null> {
        let post: Post | null = null;

        await this.api
            .getByUID("post", slug, {})
            .then((data) => {
                post = new Post(data);
            })
            .catch((e) => {
                this.logger.error(e, e, PostService.name);
            });

        return post;
    }
}
