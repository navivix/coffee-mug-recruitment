FROM node:18-alpine as builder

ENV NODE_ENV build

USER node
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn

COPY --chown=node:node . .
RUN yarn build

# ---

FROM node:18-alpine

ENV NODE_ENV production

USER node
WORKDIR /app

COPY --from=builder --chown=node:node /app/package.json ./
COPY --from=builder --chown=node:node /app/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /app/dist/ ./dist/

EXPOSE 3000

CMD ["yarn", "start:prod"]