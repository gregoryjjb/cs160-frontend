# Front-end

This project was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app).

## Installation

* Download [Node](https://nodejs.org/) (including NPM)
* Clone the repo
* CD into the repo and run
  > npm install
* Once it's done installing required packages run
  > npm start
* The development server will be running at [localhost:3000](http://localhost:3000).
  * Note! Google authentication will not work on any other port or URL. Google requires that I specify the domains that are allowed to log in and right now I just have localhost:3000 listed.

### Communication with the server

Attempting to log in will fail unless you have the [server](https://github.com/gregdumb/cs160-server) installed and running as well. Note that the React development server is running on port 3000, while the Node server is running on 4000. Any asynchronous requests made by the frontend will be proxied to :4000/ by the React dev server. In production, there will only be the Node server and it will also serve a production build of the React app, and this proxy will be uneccessary.