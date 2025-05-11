# Use Node.js as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY app/backend/package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY app/backend .

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]