FROM node:14.21.2
WORKDIR /backend
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
RUN export PORT=3000
COPY . .
CMD ["npm", "start"]
EXPOSE 3000