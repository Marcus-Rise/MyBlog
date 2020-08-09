FROM strapi/base AS base
WORKDIR /app

USER node

FROM base AS dev

CMD npm run develop

EXPOSE 1337

FROM strapi/base AS prod

COPY ./package*.json ./

RUN npm ci

COPY ./api ./api
COPY ./config ./config
COPY ./extensions ./extensions
COPY ./public ./public
COPY ./favicon.ico ./favicon.ico

ENV NODE_ENV production
ARG DOMAIN
ENV DOMAIN ${DOMAIN}

RUN echo "domain is ${DOMAIN}"
RUN npm run build

CMD npm run start

EXPOSE 1337
