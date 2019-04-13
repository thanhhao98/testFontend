FROM node:11.11.0
MAINTAINER thanhhao<hao.phanthanh98@gmail.com>
WORKDIR /usr/src/project
COPY package.json ./
COPY start.sh ./
COPY . .
RUN npm install @vue/cli -g
RUN npm install
RUN chmod +x ./start.sh
EXPOSE 8080