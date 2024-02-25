FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV NODE_SERVER_DOCKER_PORT 5000

EXPOSE $NODE_SERVER_DOCKER_PORT

CMD [ "npm", "run", "dev" ]