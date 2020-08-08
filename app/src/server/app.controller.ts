import { Controller, Get, Render } from "@nestjs/common";
import { IndexPageProps } from "../dto/IndexPageProps";
import { PostService } from "./post/post.service";
import { PostDto } from "./post/post.dto";

@Controller()
export class AppController {
    constructor(private readonly postService: PostService) {}

    @Get()
    @Render("Index")
    async getHello(): Promise<IndexPageProps> {
        const posts = await this.postService.get();

        return { posts: posts.map((i) => new PostDto(i)) };
    }
}
