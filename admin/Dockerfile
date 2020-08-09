FROM strapi/strapi as dev

EXPOSE 1337

FROM strapi/base as prod
WORKDIR /app

COPY ./package*.json ./

RUN npm ci

COPY . .

ENV NODE_ENV production

RUN npm run build

CMD npm run start

EXPOSE 1337
