import { Controller, Get, NotFoundException, Param, Render } from "@nestjs/common";
import { PostService } from "./post.service";
import { POST_PAGE_URL, PostPageProps } from "../../dto/PostPageProps";
import { PostDto } from "./post.dto";
import { INDEX_PAGE_URL, IndexPageProps } from "../../dto/IndexPageProps";

@Controller()
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get(INDEX_PAGE_URL)
    @Render("Index")
    async index(): Promise<IndexPageProps> {
        const posts = await this.postService.get();

        return { posts: posts.map((i) => new PostDto(i)) };
    }

    @Get(POST_PAGE_URL + "/:slug")
    @Render("Post")
    async getBySlug(@Param("slug") slug: string): Promise<PostPageProps> {
        const post = await this.postService.getBySlug(slug);

        if (!post) {
            throw new NotFoundException(`post with slug ${slug} is not found`);
        }

        return { post: new PostDto(post) };
    }
}
