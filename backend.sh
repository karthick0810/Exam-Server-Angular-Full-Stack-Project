#!/bin/bash

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 754450290666.dkr.ecr.us-east-1.amazonaws.com

cd examserver

git pull

docker build --no-cache -t backend:latest .

docker tag backend:latest 754450290666.dkr.ecr.us-east-1.amazonaws.com/my-app/backend:latest

docker push 754450290666.dkr.ecr.us-east-1.amazonaws.com/my-app/backend:latest

docker rmi -f backend:latest

docker rmi -f 754450290666.dkr.ecr.us-east-1.amazonaws.com/my-app/backend:latest
