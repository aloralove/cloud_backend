# Use the official Node.js image as a parent image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
