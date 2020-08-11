import { Controller, Get, NotFoundException, Param, Render } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostPageProps } from "../../dto/PostPageProps";
import { PostDto } from "./post.dto";

@Controller()
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get("/post/:slug")
    @Render("Post")
    async getBySlug(@Param("slug") slug: string): Promise<PostPageProps> {
        const post = await this.postService.getBySlug(slug);

        if (!post) {
            throw new NotFoundException(`post with slug ${slug} is not found`);
        }

        return { post: new PostDto(post) };
    }
}
