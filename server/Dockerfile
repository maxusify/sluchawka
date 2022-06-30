FROM node:18.3.0-alpine3.16
WORKDIR /usr/src/app
RUN apk update \
  && apk add bash \
  && rm -rf /var/cache/apk/*
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn prisma generate