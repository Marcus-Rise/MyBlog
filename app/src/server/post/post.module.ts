import { Logger, Module } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";
import { PrismicModule } from "../prismic/prismic.module";

@Module({
    imports: [PrismicModule],
    providers: [PostService, Logger],
    controllers: [PostController],
    exports: [PostService],
})
export class PostModule {}
