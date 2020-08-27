import { Module } from "@nestjs/common";
import { RenderModule } from "nest-next";
import { PostModule } from "./post/post.module";
import Next from "next";
import { resolve } from "path";

const dev = process.env.NODE_ENV === "development";

@Module({
    imports: [
        RenderModule.forRootAsync(
            Next({ dev, dir: dev ? resolve(__dirname, "../client") : resolve(__dirname, "../../dist/client") }),
            { dev, viewsDir: "" },
        ),
        PostModule,
    ],
})
export class AppModule {}
