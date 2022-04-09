FROM node:16.13.1-alpine AS builder

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/
RUN yarn install --frozen-lockfile

COPY . /app/

RUN yarn build

RUN rm -rf node_modules
RUN yarn install --production
RUN yarn cache clean


FROM node:16.13.1-alpine

# default ENV to allow container to start in demo mode
ENV CONFIG_FILE=sample.config.yml
ENV STORAGE_DIR=/app/storage

WORKDIR /app

RUN mkdir /app/storage

COPY --from=builder /app/ /app/

ENTRYPOINT [ "yarn", "start" ]