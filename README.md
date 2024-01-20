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
Signup: POST /signup

Endpoint to register a new user.
Login: POST /login

Endpoint for user login.
Logoff: POST /logoff

Authenticated endpoint for logging off a user.
User Details: GET /userdetails

Authenticated endpoint to retrieve the details of the logged-in user.
Update Profile: POST /uppdateprofile/:userid

Endpoint to update the profile of a user. The URL seems to have a typo (uppdateprofile should be updateprofile).
Get All Users: GET /getallusers

Authenticated endpoint to retrieve all users.
Follow/Unfollow User: POST /followunfollowuser/:userid

Authenticated endpoint to follow or unfollow another user.
Check If User Is Following: GET /getifuserisfollowing/:userid

Authenticated endpoint to check if the logged-in user is following another user.

```
Tweet
```
Post Tweet: POST /posttweet

Authenticated endpoint to create a new tweet.
Delete Tweet: POST /deletetweet:tweetid

Authenticated endpoint to delete a tweet. The URL should ideally have a slash before the parameter (:tweetid), like /deletetweet/:tweetid.
Get All Tweets by User: GET /getalltweetsbyuser

Authenticated endpoint to retrieve all tweets posted by a specific user.
Like Tweet: POST /liketweet/:tweetId

Authenticated endpoint to like a tweet.
Get All Users Who Liked a Tweet: GET /getAllUsersWhoLiked/:tweetId

Authenticated endpoint to get a list of all users who liked a specific tweet.
Get All Tweets for Feed: GET /getAllTweetsForFeed

Authenticated endpoint to get all tweets for a user's feed, typically including tweets from followed users and the user's own tweets.

```




Reply (Yet To Do)
```
Post Reply: POST /postreply

Authenticated endpoint to post a reply to a tweet.
Delete Reply: POST /deletereply:replyid

Authenticated endpoint to delete a reply. The URL should have a slash before the parameter (:replyid), like /deletereply/:replyid.
Get All Replies of a Tweet: GET /getReplys:tweetId

Authenticated endpoint to get all replies for a specific tweet. The URL should have a slash before the parameter (:tweetId), like /getReplys/:tweetId.

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