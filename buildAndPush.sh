#!/bin/sh

# Arguments
# $1: version

docker build --build-arg APP_VERSION=$1 -t personal-website:$1 .
docker tag personal-website:$1 kellenschimdt/personal-website:$1
docker push kellenschmidt/personal-website:$1
