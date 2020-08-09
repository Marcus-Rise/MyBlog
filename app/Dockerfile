ARG NODE_VERSION=14

FROM node:$NODE_VERSION AS dev
WORKDIR /app

USER node

CMD npm install --quiet && npm run dev

FROM node:${NODE_VERSION}-alpine AS prod
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY ./src ./src
COPY ./*.js* ./

#RUN npm run lint
#RUN npm run test
RUN npm run build

CMD npm run start

EXPOSE 3000
