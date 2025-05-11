# Use Node.js as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY docker/frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy server file
COPY docker/frontend/server.js ./

# Create src directory
RUN mkdir -p src

# Copy all files from app/frontend/src to src
COPY app/frontend/src/* ./src/

# Expose port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]