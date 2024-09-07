# FROM bitnami/node:20
FROM keymetrics/pm2:18-slim

RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /app/ && chown -R node:node /app

WORKDIR /app

ARG SERVICE_NAME=''
ARG SERVICE_ENVIRONMENT=''
ARG SERVICE_VERSION=''
ARG SERVICE_URL=''

ENV SERVICE_NAME=${SERVICE_NAME:-''}
ENV SERVICE_ENVIRONMENT=${SERVICE_ENVIRONMENT:-''}
ENV SERVICE_VERSION=${SERVICE_VERSION:-''}
ENV SERVICE_URL=${SERVICE_URL:-''}

ENV NODE_ENV=production

USER node

COPY --chown=node:node package*.json /app/

RUN npm ci --omit=dev && npm cache clean --force --loglevel=error

COPY --chown=node:node ./ /app/

EXPOSE 8000

HEALTHCHECK --start-period=60s --timeout=5s --interval=30s --retries=5 CMD curl -f http://localhost:8000/ || exit 1

ENTRYPOINT ["pm2-runtime", "start", "./pm2.config.js", "--env", "production"]

CMD [""]
