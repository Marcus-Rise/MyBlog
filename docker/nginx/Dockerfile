FROM nginx as dev

EXPOSE 80

FROM nginx as prod

COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/nginx/502.html /etc/nginx/html/

EXPOSE 80
