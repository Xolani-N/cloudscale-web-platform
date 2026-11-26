# Deployment Guide

## Clone Repository

```bash
git clone https://github.com/xolani-n/cloudscale-web-platform.git
```

## Build Docker Image

```bash
docker build -t cloudscale -f docker/Dockerfile .
```

## Run Container

```bash
docker run -d -p 8081:80 --name cloudscale-web cloudscale
```

## Open Dashboard

```text
http://localhost:8081
```
