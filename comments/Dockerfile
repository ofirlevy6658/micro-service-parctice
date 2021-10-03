FROM node:alpine

WORKDIR /app

copy package.json ./
run npm install 
copy ./ ./
cmd ["npm","start"]