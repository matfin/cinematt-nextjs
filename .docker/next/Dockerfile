FROM      node:12.18-alpine
RUN       mkdir -p /opt/build/node_modules && chown -R node:node /opt/build
USER      node
WORKDIR   /opt/build
COPY      package.json yarn.lock ./
RUN       yarn cache clean
RUN       yarn
COPY      --chown=node:node . .
RUN       yarn build
RUN       yarn export
