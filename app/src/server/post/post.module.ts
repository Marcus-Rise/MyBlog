import { HttpModule, Logger, Module } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";

@Module({
    imports: [HttpModule],
    providers: [PostService, Logger],
    controllers: [PostController],
    exports: [PostService],
})
export class PostModule {}
