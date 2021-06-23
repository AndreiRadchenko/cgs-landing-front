FROM node:14-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN ["yarn", "install", "--frozen-lockfile", "--production=true"]

COPY assets ./assets
COPY config ./config
COPY src ./src

CMD ["node", "src"]
