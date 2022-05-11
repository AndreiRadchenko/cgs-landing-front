FROM node:14.17.0-alpine as dependencies
WORKDIR /cg-landing-frontend
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:14.17.0-alpine as builder
WORKDIR /cg-landing-frontend
COPY . .
COPY --from=dependencies /cg-landing-frontend/node_modules ./node_modules
RUN yarn build

FROM node:14.17.0-alpine as runner
WORKDIR /cg-landing-frontend
# ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.

ARG PORT
ENV PORT=$PORT
COPY --from=builder /cg-landing-frontend/next.config.js ./
COPY --from=builder /cg-landing-frontend/public ./public
COPY --from=builder /cg-landing-frontend/.next ./.next
COPY --from=builder /cg-landing-frontend/node_modules ./node_modules
COPY --from=builder /cg-landing-frontend/package.json ./package.json

EXPOSE $PORT
CMD ["yarn", "start"]