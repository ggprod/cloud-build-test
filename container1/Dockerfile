FROM node:8.10
COPY package.json .
COPY package-lock.json .
COPY index.js .
RUN npm install
ENV PGHOST=postgres-container
ENV PGUSER=postgres
ENV PGPASSWORD=postgres

CMD ["npm", "start"]
