# Use the official Node.js image as the base
FROM octoblu/pnpm

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN NODE_ENV=development pnpm i

# Copy the entire project to the container
COPY . .

# Expose the port on which the application runs (replace 3000 with the actual port if different)
EXPOSE 3000

# Start the application
CMD ["pnpm", "dev"]
