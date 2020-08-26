import { Module } from "@nestjs/common";
import { API_PROVIDER, IApi } from "./prismic.types";
import prismic from "prismic-javascript";

const PRISMIC_PROVIDER = {
    provide: API_PROVIDER,
    useFactory: (): IApi => {
        return prismic.client(process.env.API_END_POINT || "", { apiDataTTL: 0 });
    },
};

@Module({
    providers: [PRISMIC_PROVIDER],
    exports: [PRISMIC_PROVIDER],
})
export class PrismicModule {}
