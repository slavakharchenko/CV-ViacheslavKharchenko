FROM node:slim

COPY . /app

WORKDIR /app

EXPOSE 3000

RUN npm ci --only=prod

ENTRYPOINT npm run start