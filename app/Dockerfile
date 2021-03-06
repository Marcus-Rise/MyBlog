ARG NODE_VERSION=14

FROM node:$NODE_VERSION AS dev
WORKDIR /app

USER node

CMD npm install --quiet && npm run dev

EXPOSE 3000

FROM node:${NODE_VERSION}-stretch-slim AS build
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY ./src ./src
COPY ./*.js* ./

RUN npm run lint
#RUN npm run test
RUN npm run build \
    && cp -r src/client/public/* dist/client/.next \
    && cp -r dist/client/.next client_backup

RUN npm prune --production && npm cache clear --force

FROM node:${NODE_VERSION}-stretch-slim as prod
WORKDIR /app

ENV NODE_ENV=production

COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/client_backup ./client_backup

CMD rm -rf dist/client/.next/* \
    && cp -r client_backup/* dist/client/.next \
    && node dist/server/main.js

EXPOSE 3000
