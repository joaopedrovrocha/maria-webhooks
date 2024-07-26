FROM node:20.12.2

WORKDIR /app

COPY package*.json .

RUN npm install --legacy-peer-deps --force

COPY . .

RUN npm run build

CMD [ "npm", "start" ]

EXPOSE 3000