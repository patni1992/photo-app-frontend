FROM node:8.11.3-alpine

WORKDIR /code/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]