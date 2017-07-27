FROM node

RUN apt-get update && \
    apt-get install -y ruby python3 golang 

COPY . /src/

WORKDIR /src
