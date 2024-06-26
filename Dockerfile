FROM node:16-alpine as build-stage
WORKDIR /app
COPY package.json ./
RUN npm install 
COPY . .
RUN npm run build
EXPOSE 3000
EXPOSE 3001
CMD ["npm", "run", "start:both"]