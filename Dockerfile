FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

# Build the front end
RUN npm run build
#RUN cp -R ./build/* ./www

RUN ["chmod", "+x", "./docker-entrypoint.sh"]

# Copy files to www directory (should be volume-mounted)
ENTRYPOINT ["./docker-entrypoint.sh"]
