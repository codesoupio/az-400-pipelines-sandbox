FROM node:18-alpine3.16 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN npm run test:unit

FROM builder AS development

CMD ["npm", "run", "start:dev"]

FROM builder AS production

RUN npm ci --omit dev

CMD ["npm", "run", "start:prod"]





