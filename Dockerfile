FROM node:16.13.1-stretch-slim

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/
RUN yarn install --frozen-lockfile

COPY . /app/

RUN yarn build

RUN rm -rf node_modules
RUN yarn install --frozen-lockfile --production

ENTRYPOINT [ "yarn", "start" ]