FROM node:22-alpine

RUN apk add ffmpeg

WORKDIR /app

CMD [ "npm", "run", "start" ]
