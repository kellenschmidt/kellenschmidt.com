# docker build -t compass-app-ui .
# OR (to include custom app version)
# docker build --build-arg APP_VERSION=v1 -t compass-app-ui .
# docker run -p 80:80 -d compass-app-ui

FROM node:10-alpine as build-stage
ARG APP_VERSION
RUN mkdir /app
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --prod --silent --non-interactive --frozen-lockfile
COPY . .
RUN yarn run version $APP_VERSION
RUN yarn build

FROM nginx:1.14-alpine
ADD nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
