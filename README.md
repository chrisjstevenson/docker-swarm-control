# docker-swarm-control 

[![Build Status](https://travis-ci.org/chrisjstevenson/docker-swarm-control.svg?branch=master)](https://travis-ci.org/chrisjstevenson/docker-swarm-control.svg?branch=master)

Docker Swarm Control is a project that provides a user interface for manager Docker Swarm clusters on both Linux and Windows Containers. It 
provides basic management capabilities like restarting, modifying, or removing Swarm services and also provides a simple infrastructure view
for assessing the health of the cluster. 

## Setting up localdev
Initialize a swarm, you can use just a single node if you are working on say, a developer machine
```
docker swarm init
```
Docker for Mac does not support the "hosts" configuration item, but you can use socat to establish data transfer between port 2375 and the docker socket.

In another terminal run
```
socat TCP-LISTEN:2375,reuseaddr,fork UNIX-CONNECT:/var/run/docker.sock
```
