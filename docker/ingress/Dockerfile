FROM steveltn/https-portal AS dev

EXPOSE 80
EXPOSE 443

FROM dev AS prod

COPY ./default.ssl.conf.erb /var/lib/nginx-conf/default.ssl.conf.erb
COPY ./502.html /etc/nginx/html/

EXPOSE 80
EXPOSE 443
