FROM strapi/base AS base
WORKDIR /app

USER node

FROM base AS dev

CMD npm install && npm run develop

EXPOSE 1337

FROM base AS prod

COPY ./package*.json ./
RUN npm ci

COPY ./api ./api
COPY ./config ./config
COPY ./extensions ./extensions
COPY ./public ./public
COPY ./favicon.ico ./favicon.ico
COPY ./.eslintrc ./.eslintrc
COPY ./.eslintignore ./.eslintignore

ENV NODE_ENV production
ARG DOMAIN
ENV DOMAIN ${DOMAIN}
ARG ADMIN_JWT_SECRET
ENV ADMIN_JWT_SECRET ${ADMIN_JWT_SECRET}

RUN echo "domain is ${DOMAIN}"
RUN npm run build

CMD npm run start

EXPOSE 1337
