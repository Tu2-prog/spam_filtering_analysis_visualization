FROM node:latest AS serve

WORKDIR /app

RUN npm install -g @angular/cli@latest
COPY ./package.json .
RUN npm install
COPY . .

ARG API_URL
ENV API_URL=${API_URL}

CMD ["ng", "serve", "--port=8080"]
