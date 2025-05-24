# Stage 1: Build the Angular app
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Replace baseUrl in helper.ts before build
RUN sed -i "s|let baseUrl= '.*';|let baseUrl= 'http://afebb05d2998b4d81aa2bcbc9bfbcaaa-1914543764.us-west-1.elb.amazonaws.com:8080';|g" src/app/services/helper.ts

RUN npm run build -- --force


# Stage 2: Serve with nginx
FROM nginx:alpine

COPY --from=build /app/dist/angular-examserver /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
