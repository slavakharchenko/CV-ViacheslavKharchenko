FROM node:16.14.0-slim

COPY . /app

WORKDIR /app

EXPOSE 3000

RUN npm ci --only=prod

ENTRYPOINT npm run start