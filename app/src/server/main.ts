import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";

(async () => {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    const PORT = Number(process.env.PORT || 3000);

    await app.listen(PORT, async () => {
        console.log(`> Ready on http://localhost:${PORT}`);
    });
})();
