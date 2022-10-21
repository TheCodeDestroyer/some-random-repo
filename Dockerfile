FROM node:16-alpine

# Copy & build the app
WORKDIR /app
COPY --chown=node:node . .

ENV NODE_ENV=prod

RUN yarn install --production

USER node

EXPOSE 3000

CMD ["node", "src/index.js"]
