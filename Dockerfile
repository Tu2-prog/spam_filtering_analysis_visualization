FROM node:21-alpine3.17 AS serve

WORKDIR /app

RUN npm install -g @angular/cli@latest
COPY ./package.json .
RUN npm install
COPY . .

RUN ng analytics disable

CMD ["ng", "serve", "--port=8888"]
