import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import Next from "next";
import { RenderModule } from "nest-next";
import { resolve } from "path";

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
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
