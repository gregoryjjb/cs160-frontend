FROM node:9

ARG google_client_id

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

# This has to be baked in to the front end build
RUN echo REACT_APP_GOOGLE_CLIENT_ID=$google_client_id > .env.local
#RUN cat .env.local

# Build the front end
RUN npm run build
#RUN cp -R ./build/* ./www

# Copy files to www directory (should be volume-mounted)
RUN chmod +x *-entrypoint.sh
ENTRYPOINT ["./docker-entrypoint.sh"]
