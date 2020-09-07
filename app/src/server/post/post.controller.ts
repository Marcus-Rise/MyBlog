import {
    CacheInterceptor,
    CacheTTL,
    Controller,
    Get,
    NotFoundException,
    Param,
    Render,
    UseInterceptors,
} from "@nestjs/common";
import { PostService } from "./post.service";
import { POST_PAGE_URL, PostPageProps } from "../../client/dto/PostPageProps";
import { PostListItemDto } from "./post-list-item.dto";
import { INDEX_PAGE_URL, IndexPageProps } from "../../client/dto/IndexPageProps";
import { PostDto } from "./post.dto";

@Controller()
@UseInterceptors(CacheInterceptor)
export class PostController {
    constructor(private readonly postService: PostService) {}

    @CacheTTL(20)
    @Get(INDEX_PAGE_URL)
    @Render("index")
    async index(): Promise<IndexPageProps> {
        const { items, nextPage } = await this.postService.get(1);

        return { nextPage, posts: items.map((i) => new PostListItemDto(i)) };
    }

    @CacheTTL(20)
    @Get(POST_PAGE_URL + "/:slug")
    @Render("post")
    async getBySlug(@Param("slug") slug: string): Promise<PostPageProps> {
        const post = await this.postService.getBySlug(slug);

        if (!post) {
            throw new NotFoundException(`post with slug ${slug} is not found`);
        }

        return { post: new PostDto(post) };
    }
}
