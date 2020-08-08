import { HttpModule, Module } from "@nestjs/common";
import { PostService } from "./post.service";

@Module({
    imports: [HttpModule],
    providers: [PostService],
    exports: [PostService],
})
export class PostModule {}
