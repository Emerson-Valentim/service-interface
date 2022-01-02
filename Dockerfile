FROM node:lts-alpine

WORKDIR /home/ubuntu

COPY .env .

COPY package.json .

COPY yarn.lock .

RUN yarn install --frozen-lockfile

CMD tail -f /dev/null