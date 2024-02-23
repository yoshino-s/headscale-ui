# Use the official nginx image as the base image
FROM nginx

# Copy the static files from the local machine to the nginx default directory
COPY ./dist /usr/share/nginx/html

# Expose port 80 to allow incoming traffic
EXPOSE 80

# Using SPA routing, so redirect all requests to index.html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
