FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV SERVER_PORT 5000

EXPOSE $SERVER_PORT

CMD [ "npm", "run", "dev" ]