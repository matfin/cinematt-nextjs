FROM      nginx:alpine
RUN       mkdir -p /opt/public
RUN       rm /etc/nginx/conf.d/default.conf
COPY      out/ /opt/public
COPY      .docker/nginx/templates/nginx.conf.template /etc/nginx/templates/nginx.conf.template
