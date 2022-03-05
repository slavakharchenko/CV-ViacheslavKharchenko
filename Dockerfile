FROM node:slim

COPY . /app

WORKDIR /app

RUN npm ci --only=prod

ENTRYPOINT npm run start