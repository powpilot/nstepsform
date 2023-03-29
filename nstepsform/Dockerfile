#stage 1
FROM node:14.21.2 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/nstepsform /usr/share/nginx/html
EXPOSE 4200
