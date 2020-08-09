FROM strapi/base AS base
WORKDIR /app

USER node

FROM base as dev

CMD npm run develop

EXPOSE 1337

FROM strapi/base as prod

COPY ./package*.json ./

RUN npm ci

COPY ./api ./api
COPY ./config ./config
COPY ./extensions ./extensions
COPY ./public ./public
COPY ./favicon.ico ./favicon.ico

ENV NODE_ENV production

RUN npm run build

CMD npm run start

EXPOSE 1337
