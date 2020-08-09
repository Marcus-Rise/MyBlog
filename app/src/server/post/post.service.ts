import { HttpService, Injectable, Logger } from "@nestjs/common";
import { IPostStrApiDto, Post } from "./post";

@Injectable()
export class PostService {
    constructor(private readonly http: HttpService, private readonly logger: Logger) {}

    async get(): Promise<Post[]> {
        let posts: Post[] = [];

        await this.http
            .get<IPostStrApiDto[]>("http://admin:1337/posts")
            .toPromise()
            .then((data) => {
                posts = data.data.map((i) => new Post(i));
            })
            .catch((e) => {
                this.logger.error(e.response.data, undefined, PostService.name);
            });

        return posts;
    }
}
