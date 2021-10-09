FROM node:14.13.0
ARG STAGE=develop
WORKDIR /usr/src/app
ADD . .
RUN npm install

EXPOSE 4000

CMD [ "npm", "run", "start" ]
