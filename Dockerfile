FROM node:22.4.1-alpine AS builder 

WORKDIR /app_container/app

COPY package.json package-lock.json ./
# installing package 
RUN npm install
# copy all files to the container
COPY . .
# building app in next 
RUN npm run build


# Lighter version of node 
FROM node:22.4.1-alpine AS runner 

WORKDIR /app_container/app

COPY --from=builder /app_container/app ./

# Setting expose port to 3003 test default port 3000 
EXPOSE 3003
# Change in next run to 3003

# starting app 
CMD ["npm","start"]
