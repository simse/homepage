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

WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/logos ./logos
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

RUN yarn install sharp

ENTRYPOINT [ "yarn", "start" ]