FROM nginx AS dev

EXPOSE 80

FROM nginx as prod

COPY ./prod.conf /etc/nginx/conf.d/default.conf
COPY ./502.html /etc/nginx/html/502.html

EXPOSE 80
