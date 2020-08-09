import { HttpModule, Logger, Module } from "@nestjs/common";
import { PostService } from "./post.service";

@Module({
    imports: [HttpModule],
    providers: [PostService, Logger],
    exports: [PostService],
})
export class PostModule {}
