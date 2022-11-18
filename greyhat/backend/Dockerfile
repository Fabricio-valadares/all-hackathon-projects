FROM node:18-alpine As development

WORKDIR /usr/src/app

COPY --chown=node:node package.json ./
COPY --chown=node:node yarn.lock ./

COPY prisma ./prisma/

RUN yarn install

COPY --chown=node:node . .

USER node

CMD [ "npm", "run", "start:dev" ]

# BUILD FOR PRODUCTION

FROM node:18-alpine As build

WORKDIR /usr/src/app

COPY --chown=node:node package.json ./
COPY --chown=node:node yarn.lock ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV production

RUN rm -rf node_modules && yarn install --frozen-lockfile --immutable --immutable-cache --check-cache

USER node

# PRODUCTION

FROM node:18-alpine As production

WORKDIR /app

ENV NODE_ENV=production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

EXPOSE 5000

CMD [ "node", "dist/src/main.js" ]