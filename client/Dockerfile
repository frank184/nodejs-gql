FROM node:slim

RUN apt-get update && apt-get -y install yarn sqlite3

RUN mkdir /client
WORKDIR /client

COPY ./package*.json ./

RUN yarn install

COPY . /client