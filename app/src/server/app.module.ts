import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import Next from "next";
import { RenderModule } from "nest-next";
import { resolve } from "path";
import { PostModule } from "./post/post.module";

@Module({
    imports: [
        RenderModule.forRootAsync(
            Next({
                dev: process.env.NODE_ENV !== "production",
                dir: resolve(__dirname, "../client"),
            }),
            {
                viewsDir: "",
            },
        ),
        PostModule,
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
