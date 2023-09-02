FROM node:18-alpine

RUN npm install -g ts-node 

WORKDIR /usr/src/chiguire_bot

COPY package*.json ./

COPY . .

RUN npm i 

RUN npm run build

EXPOSE 7000

CMD [ "npm", "start" ]