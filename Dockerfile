FROM node:14.15.4

# Create app directory
WORKDIR /app

# Add paths
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent

COPY . ./

CMD ["yarn", "start"]