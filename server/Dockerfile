FROM node:slim

RUN apt-get update && apt-get -y install yarn sqlite3

RUN mkdir /server
WORKDIR /server

COPY ./package*.json ./

RUN yarn install

COPY . /server