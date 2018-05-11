# Front-end

A React-based front end for [this processing pipeline](https://github.com/gregdumb/cs160). Users can upload or stream a video and delaunay triangles are drawn on the face.

This project was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app). It uses the RMWC styling libary for its Material Design theming.

### Demo Videos

* [Video uploading](https://youtu.be/9RE6Nfh6KuA)
* [Video streaming](https://youtu.be/5yjUkBXFWF0)

## Installation

* Download & install [Node.js](https://nodejs.org/) 8 (including NPM)
* Clone the repo
* CD into the repo and run `npm install`
* Get a Google client ID and assign it to the env variable `REACT_APP_GOOGLE_CLIENT_ID`.
  * For development I recommend creating a `.env.local` file and putting it in there. DO NOT put it in `.env` as that file is version controlled.
* Once it's done installing required packages run `npm start`
* The development server will be running at [localhost:3000](http://localhost:3000).
  * Note! Make sure that you specify in your Google API project the proper URLs and ports that are allowed.

### Communication with the server

Attempting to log in will fail unless you have the [server](https://github.com/gregdumb/cs160-server) installed and running as well. Note that the React development server is running on port 3000, while the Node server is running on 4000. Any asynchronous requests made by the frontend will be proxied to :4000/ by the React dev server. In production, there will only be the Node server and it will also serve a production build of the React app, and this proxy will be uneccessary.

### Running in production

To create a production build run `npm run build` and put the contents of the `build/` folder in the `www/` folder of the [server](https://github.com/gregdumb/cs160-server).
