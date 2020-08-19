import { Module } from "@nestjs/common";
import { RenderModule } from "nest-next";
import { PostModule } from "./post/post.module";

@Module({
    imports: [RenderModule, PostModule],
})
export class AppModule {}
