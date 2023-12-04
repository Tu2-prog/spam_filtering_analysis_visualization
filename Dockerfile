FROM node:latest AS serve

WORKDIR /app

RUN npm install -g @angular/cli@latest
COPY ./package.json .
RUN npm install
COPY . .

ARG ANG_AUTH_TOKEN
ENV ANG_AUTH_TOKEN=${ANG_AUTH_TOKEN}

CMD ["ng", "serve", "--port=8080"]
