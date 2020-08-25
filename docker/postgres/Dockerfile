FROM postgres:alpine AS base

ENV PGDATA=mypgdata

FROM base AS dev

EXPOSE 5432

FROM base AS prod

EXPOSE 5432
