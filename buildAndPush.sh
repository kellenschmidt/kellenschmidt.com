#!/bin/sh

# Arguments
# $1: version

$(aws ecr get-login --no-include-email --region us-west-2)
docker build --build-arg APP_VERSION=$1 -t compass-app-ui:$1 .
docker tag compass-app-ui:$1 411962362668.dkr.ecr.us-west-2.amazonaws.com/compass-app-ui:$1
docker push 411962362668.dkr.ecr.us-west-2.amazonaws.com/compass-app-ui:$1
