// TODO: introducir dinamicamente el puerto a exponer
export default `
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 8001

CMD ["npm", "start"]

`
