FROM node:16-alpine as build-stage
WORKDIR /app
COPY package.json ./
RUN npm install 
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["pm2-runtime", "start", "ecosystem.config.js"]