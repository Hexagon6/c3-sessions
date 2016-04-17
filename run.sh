#!/bin/bash

if [ -z "$ROOT_URL" ]; then
  echo -e "Set ROOT_URL with this command:\n\texport ROOT_URL='https://yourdomain.tld'"
  exit 1
fi

if [ -z "$MONGO_URL" ]; then
  echo -e "Set MONGO_URL with this command:\n\texport MONGO_URL='mongodb://user:pw@host:27017/c3sessions'"
  exit 1
fi

if [ -z "$PORT" ]; then
  echo -e "PORT not set, using default port 80"
  export PORT=80
fi

docker run -d -e ROOT_URL=$ROOT_URL -e MONGO_URL=$MONGO_URL -p $PORT:80 hexagon6/c3-sessions
