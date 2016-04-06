FROM ubuntu

MAINTAINER Hexagon6 <hexagon6@fet.li>

ENV home /c3-sessions
ENV REPO https://github.com/hexagon6/c3-sessions.git
ENV GIT_BRANCH master
ENV PORT 4054

RUN apt-get update && \
  apt-get install -yq --no-install-recommends ca-certificates git curl
# install latest node (meteor requires at least v0.10.40ish)
RUN curl -sL https://deb.nodesource.com/setup_0.10 | sh
RUN apt-get update && \
  apt-get install -y nodejs && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/
# very insecure... but this seems to be the standard installation routine
RUN curl --insecure https://install.meteor.com/ | sh
RUN git clone $REPO $home && cd $home && git checkout $GIT_BRANCH
RUN mkdir -p $home/build && \
  cd $home && \
  meteor build --directory $home/build
RUN cd $home/build && \
  cd bundle/programs/server && \
  npm install

ADD .env $home/.env
# sourcing MONGO_URL and ROOT_URL

EXPOSE $PORT

CMD . $home/.env && cd $home/build/bundle && nodejs main.js
