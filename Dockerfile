# build stage
FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# production stage / multistage building
# webserver nginx
FROM nginx:stable-alpine as production-stage

# copy nginx config for vue-router settings
COPY default.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

# Daeomon off is better for docker so it sees it running in the forground otherwise it won't work
CMD ["nginx", "-g", "daemon off;"]