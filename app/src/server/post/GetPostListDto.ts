import { IsNumber } from "class-validator";
import { Transform } from "class-transformer";

export class GetPostListDto {
    @Transform((val) => Number(val))
    @IsNumber()
    page: number;

    constructor(page = 0) {
        this.page = page;
    }
}
