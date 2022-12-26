FROM node:boron
ARG STAGE=develop
WORKDIR /usr/src/app
COPY . .
RUN npm install

EXPOSE 4000

CMD [ "npm", "run", "start" ]
