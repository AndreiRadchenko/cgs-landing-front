FROM node:14.17.0-alpine as dependencies
WORKDIR /cd-landing-frontend-stg
ARG PORT
ENV PORT=$PORT
ENV NEXT_PUBLIC_BASE_URL=https://code-landing-2022.herokuapp.com
ENV NEXT_PUBLIC_SITE_URL=https://cgsteam.io
ENV NEXT_PUBLIC_HOME_EMAIL_SERVICE_ID=service_zdqo22v
ENV NEXT_PUBLIC_HOME_EMAIL_TEMPLATE_ID=template_bfcaxyh
ENV NEXT_PUBLIC_HOME_EMAIL_USER_ID=jcbhbS72gjoUkvlCx
ENV NEXT_PUBLIC_VACANCIES_EMAIL_TEMPLATE_ID=template_h870178

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:14.17.0-alpine as builder
WORKDIR /cd-landing-frontend-stg
COPY . .
COPY --from=dependencies /cd-landing-frontend-stg/node_modules ./node_modules
RUN yarn build

FROM node:14.17.0-alpine as runner
WORKDIR /cd-landing-frontend-stg
# ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.



COPY --from=builder /cd-landing-frontend-stg/next.config.js ./
COPY --from=builder /cd-landing-frontend-stg/public ./public
COPY --from=builder /cd-landing-frontend-stg/.next ./.next
COPY --from=builder /cd-landing-frontend-stg/node_modules ./node_modules
COPY --from=builder /cd-landing-frontend-stg/package.json ./package.json

EXPOSE $PORT
CMD ["yarn", "start"]
