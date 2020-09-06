FROM nginx AS dev

EXPOSE 80

FROM nginx as prod

COPY ./prod.conf /etc/nginx/conf.d/default.conf
COPY ./502.html /etc/nginx/html/502.html
COPY ./bootstrap.min.css /etc/nginx/html/bootstrap.min.css
COPY ./favicon.png /etc/nginx/html/favicon.png

EXPOSE 80
