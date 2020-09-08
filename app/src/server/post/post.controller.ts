import {
    CacheInterceptor,
    CacheTTL,
    Controller,
    Get,
    NotFoundException,
    Param,
    Query,
    Render,
    UseInterceptors,
    ValidationPipe,
} from "@nestjs/common";
import { PostService } from "./post.service";
import { POST_PAGE_URL, PostPageProps } from "../../client/dto/PostPageProps";
import { PostListItemDto } from "./post-list-item.dto";
import { INDEX_PAGE_URL, IndexPageProps } from "../../client/dto/IndexPageProps";
import { PostDto } from "./post.dto";
import { GET_POST_LIST_URL } from "../../client/dto/GetPostList";
import { GetPostListDto } from "./GetPostListDto";

@Controller()
@UseInterceptors(CacheInterceptor)
export class PostController {
    private static readonly POST_LIST_LIMIT: number = 10;

    constructor(private readonly postService: PostService) {}

    @CacheTTL(20)
    @Get(INDEX_PAGE_URL)
    @Render("index")
    async index(): Promise<IndexPageProps> {
        const { items, nextPage } = await this.postService.get(1, PostController.POST_LIST_LIMIT);

        return { nextPage, posts: items.map((i) => new PostListItemDto(i)) };
    }

    @CacheTTL(20)
    @Get(GET_POST_LIST_URL)
    async get(@Query(new ValidationPipe({ transform: true })) dto: GetPostListDto): Promise<IndexPageProps> {
        const { items, nextPage } = await this.postService.get(dto.page, PostController.POST_LIST_LIMIT);

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
