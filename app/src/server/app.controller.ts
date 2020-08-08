import { Controller, Get, Render } from "@nestjs/common";
import { AppService } from "./app.service";
import { IndexPageProps } from "../dto/IndexPageProps";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    @Render("Index")
    async getHello(): Promise<IndexPageProps> {
        return { title: this.appService.getHello() };
    }
}
