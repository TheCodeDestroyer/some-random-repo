#!/bin/bash
cd "$(dirname "$0")"

read -rp "Stack name: " STACK_NAME
read -rp "VPC ID: " VPC_ID
read -rp "Subnet 1 ID: " SUBNET_1_ID
read -rp "Subnet 2 ID: " SUBNET_2_ID
read -rp "Certificate ARN: " CERTIFICATE_ARN
read -rsp "Redis Password: " REDIS_PASSWORD
echo
read -rp "DNS Service Discovery Namespace: " DNS_NAMESPACE
read -rp "Load Balancer Hosted Zone Name: " HOSTED_ZONE
read -rp "Service Discovery Name: " SERVICE_DISCOVER_NAME


VPC_ID=${VPC_ID:-$AWS_VPC_ID}
SUBNET_1_ID=${SUBNET_1_ID:-$AWS_SUBNET_1_ID}
SUBNET_2_ID=${SUBNET_2_ID:-$AWS_SUBNET_2_ID}
CERTIFICATE_ARN=${CERTIFICATE_ARN:-$AWS_CERTIFICATE_ARN}
REDIS_PASSWORD=${REDIS_PASSWORD:-$AWS_REDIS_PASSWORD}
DNS_NAMESPACE=${DNS_NAMESPACE:-$AWS_DNS_NAMESPACE}
HOSTED_ZONE=${HOSTED_ZONE:-$AWS_HOSTED_ZONE}
SERVICE_DISCOVER_NAME=${SERVICE_DISCOVER_NAME:-$AWS_SERVICE_DISCOVER_NAME}

aws cloudformation create-stack --stack-name $STACK_NAME --template-body file://aws/ecs.yaml --parameters \
  ParameterKey=VpcIdParam,ParameterValue=$VPC_ID \
  ParameterKey=Subnet1IdParam,ParameterValue=$SUBNET_1_ID \
  ParameterKey=Subnet2IdParam,ParameterValue=$SUBNET_2_ID \
  ParameterKey=CertificateArnParam,ParameterValue=$CERTIFICATE_ARN \
  ParameterKey=RedisPasswordParam,ParameterValue=$REDIS_PASSWORD \
  ParameterKey=DNSNameSpaceParam,ParameterValue=$DNS_NAMESPACE \
  ParameterKey=HostedZoneNameParam,ParameterValue=$HOSTED_ZONE \
  ParameterKey=ServiceDiscoveryNameParam,ParameterValue=$SERVICE_DISCOVER_NAME
