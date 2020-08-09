FROM strapi/base AS base
WORKDIR /app

USER node

FROM base as dev

CMD npm run develop

EXPOSE 1337

FROM strapi/base as prod

COPY ./package*.json ./

RUN npm ci

COPY . .

ENV NODE_ENV production

RUN npm run build

CMD npm run start

EXPOSE 1337
