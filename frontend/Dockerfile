FROM node:12

ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

RUN apt update -y \
    && apt install nginx curl vim -y \
    && apt-get install software-properties-common -y \
    && add-apt-repository ppa:certbot/certbot -y \
    # && apt-get update -y \
    && apt-get install python-certbot-nginx -y \
    && apt-get clean
RUN yarn

WORKDIR /app
ADD . /app

EXPOSE 3000
EXPOSE 80
EXPOSE 35729


# ENTRYPOINT ["/bin/bash", "/app/run.sh"]
CMD ["nginx", "-g", "daemon off;"]
