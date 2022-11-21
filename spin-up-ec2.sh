#!/bin/bash
cd "$(dirname "$0")"

read -rp "Stack name: " STACK_NAME
read -rp "VPC ID: " VPC_ID
read -rp "Subnet ID: " SUBNET_ID
read -rp "Availability Zone ID: " AZ_ID
read -rp "Hosted Zone Name: " HOSTED_ZONE
read -rp "First CIDR: " CIDR_1
read -rp "Second CIDR: " CIDR_2

VPC_ID=${VPC_ID:-$AWS_VPC_ID}
SUBNET_ID=${SUBNET_ID:-$AWS_SUBNET_ID}
AZ_ID=${AZ_ID:-$AWS_AZ_ID}
HOSTED_ZONE=${HOSTED_ZONE:-$AWS_HOSTED_ZONE}
CIDR_1=${CIDR_1:-$AWS_CIDR_1}
CIDR_2=${CIDR_2:-$AWS_CIDR_2}

aws cloudformation create-stack --stack-name $STACK_NAME --template-body file://aws/ec2.yaml --parameters \
  ParameterKey=VpcIdParam,ParameterValue=$VPC_ID \
  ParameterKey=SubnetIdParam,ParameterValue=$SUBNET_ID \
  ParameterKey=AvailabilityZoneParam,ParameterValue=$AZ_ID \
  ParameterKey=HostedZoneNameParam,ParameterValue=$HOSTED_ZONE \
  ParameterKey=IngressCidrParam1,ParameterValue=$CIDR_1 \
  ParameterKey=IngressCidrParam2,ParameterValue=$CIDR_2 \
  --capabilities CAPABILITY_IAM
