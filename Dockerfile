FROM nginx:alpine 
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY src /usr/share/nginx/html
