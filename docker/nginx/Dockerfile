FROM nginx as dev

EXPOSE 80

FROM nginx as prod

COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./502.html /etc/nginx/html/

EXPOSE 80
