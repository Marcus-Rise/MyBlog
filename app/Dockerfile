ARG NODE_VERSION=14

FROM node:$NODE_VERSION AS dev
WORKDIR /app

USER node

CMD npm install --quiet && npm run dev

FROM node:${NODE_VERSION}-alpine AS build
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY ./src ./src
COPY ./*.js* ./

#RUN npm run lint
#RUN npm run test
RUN npm run build

FROM node:${NODE_VERSION}-alpine as prod
WORKDIR /app

COPY --from=build /app/package*.json ./

RUN npm ci --only=prod

COPY --from=build /app/dist ./dist

CMD npm run start
