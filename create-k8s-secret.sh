#!/bin/bash

read -rsp "Redis password:" PASSWORD

kubectl create secret generic redis-secret --from-literal password="${PASSWORD}"
