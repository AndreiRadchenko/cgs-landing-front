# TODO: create multistage build

FROM node:14-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

ARG API_URL
ENV BASE_URL=${API_URL}

RUN yarn run build

CMD yarn run start --port ${PORT}
