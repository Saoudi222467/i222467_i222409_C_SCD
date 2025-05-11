# Use Node.js as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY docker/adminpanel/package*.json ./

# Install dependencies
RUN npm install

# Copy server file
COPY docker/adminpanel/server.js ./

# Copy frontend files
COPY app/adminpanel/frontend ./frontend

# Copy backend files
COPY app/adminpanel/backend ./backend

# Expose port
EXPOSE 3003

# Start the server
CMD ["npm", "start"]