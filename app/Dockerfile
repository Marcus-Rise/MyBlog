ARG NODE_VERSION=14

FROM node:$NODE_VERSION AS dev
WORKDIR /app

CMD npm install && npm run dev

FROM node:${NODE_VERSION}-alpine AS prod
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY ./ .

RUN npm run lint
RUN npm run test
RUN npm run build
RUN cp -r dist build_backup

CMD rm -rf dist/* \
    && cp -r build_backup/* dist \
    && npm run start

EXPOSE 3000
