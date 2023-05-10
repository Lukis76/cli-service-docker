export default `
FROM node:18-alpine\n\n
WORKDIR /app\n\n
COPY package*.json ./\n\n
RUN npm i\n\n
COPY . .\n\n
EXPOSE 8000\n\n
CMD ["npm", "start"]\n
`