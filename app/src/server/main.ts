import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import { bootstrap } from "./bootstrap";

(async () => {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    const PORT = Number(process.env.PORT || 3000);

    await bootstrap(app);

    await app.listen(PORT, async () => {
        console.log(`> Ready on http://localhost:${PORT}`);
    });
})();
