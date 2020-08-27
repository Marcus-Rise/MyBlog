import { NestExpressApplication } from "@nestjs/platform-express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import csurf from "csurf";

export const bootstrap = async (server: NestExpressApplication): Promise<void> => {
    server.use(cookieParser(process.env.COOKIE_SECRET || "COOKIE_SECRET"));
    server.use(csurf({ cookie: true }));

    switch (process.env.NODE_ENV) {
        case "development":
            server.use(morgan("dev"));
            break;
        case "test":
            server.use(morgan("tiny"));
            break;
        case "production":
            server.use(
                morgan("combined", {
                    skip: (req, res) => res.statusCode < 400,
                }),
            );
            server.use(
                helmet({
                    contentSecurityPolicy: {
                        directives: {
                            defaultSrc: [
                                "'self'",
                                ...(process.env.ALLOWED_CONTENT_ORIGIN || "").split(","),
                                "'unsafe-inline'",
                            ],
                            objectSrc: ["'none'"],
                            upgradeInsecureRequests: [],
                        },
                    },
                }),
            );
            server.use(cors());
            break;
    }
};
