FROM registry.access.redhat.com/ubi9/nodejs-18
USER root
WORKDIR /app
COPY . .
RUN npm ci
CMD npm run dev --workspace=standalone
