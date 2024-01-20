# Full-Stack Twitter Clone

## Overview

This platform allows users to create posts, replies, and likes, while also managing their profiles and authentication. It's built with Node.js, Express, React, and MongoDB.

## Getting Started

### Prerequisites

React
Node.js
MongoDB
npm (Node Package Manager)

### Installation

Clone the repository:

Bash
```
git clone https://github.com/ParasaramNT/TwitterFullStack.git
Use code with caution. Learn more
Navigate to the project directory:
```

Bash
```
cd [project directory]
Use code with caution. Learn more
Install dependencies:
```

For backend:

Bash
```
npm install
Use code with caution. Learn more
For frontend (inside the client directory): client
```

Bash
```
cd client
npm install
Use code with caution. Learn more
Set up environment variables: NA

```

In the root directory for backend (.env file):
```
PORT: Server's port number
JWT_SECRET: Secret key for JSON Web Token
MONGODB_URI: MongoDB connection string
In the client directory for frontend (.env file):
Add any required environment variables
```
### Start the server and client

Backend:

Bash
```
npm start
```
Use code with caution. Learn more
Frontend (in a separate terminal):

Bash
```
cd client
npm run dev
```
Use code with caution. Learn more
## Features

### Backend

User Authentication (JWT)
CRUD Operations for tweets, replies, and profiles
Middleware for authentication and error handling
MongoDB database
### Frontend

React framework
State management (useState, useEffect)
Routing (react-router-dom)
Axios for API requests
Responsive design
## Directory Structure

backend/
config/
controllers/
middlewares/
models/
routes/
client/
Components/
pages/
App.js
index.js
## API Endpoints

User
```

/api/signup
/api/signin
```
Tweet
```
/api/posttweet
/api/deletetweet/:tweetId
/api/liketweet/:tweetId
```
Reply
```
/api/postreply
/api/deletereply/:replyId (Tobe Done)
```
## Development Notes

Ensure MongoDB is running for the backend.
Use npm run dev for development mode with nodemon.
Frontend requests are proxied to the backend server.
Use environment variables for sensitive information.
## Contributing

Contributions are welcome via pull requests.

## License

MIT License