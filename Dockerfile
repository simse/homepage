FROM node:16.13.1

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/
RUN yarn install --frozen-lockfile

COPY . /app/


RUN yarn build

ENTRYPOINT [ "yarn", "start" ]