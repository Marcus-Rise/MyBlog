import { Module } from "@nestjs/common";
import Next from "next";
import { RenderModule } from "nest-next";
import { resolve } from "path";
import { PostModule } from "./post/post.module";

const dev = process.env.NODE_ENV !== "production";

@Module({
    imports: [
        RenderModule.forRootAsync(
            Next({
                dev,
                dir: dev ? resolve(__dirname, "../client") : resolve(__dirname, "../../dist/client"),
            }),
            {
                viewsDir: "",
            },
        ),
        PostModule,
    ],
})
export class AppModule {}
