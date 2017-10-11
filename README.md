## Project Readable

This is the second project for Udacity's React Nanodegree Program. It was completed as an introduction to Redux and state management. The app is an anonymous posting board.

Copyright 2016 Robert Hubbard  
Licensed under the MIT License


## Getting Started
### Installation

Clone the repository using:
`git clone https://github.com/robwa10/readable-project.git`

`cd api-server` and install node dependencies using:
`npm install`

`cd frontend` and install node dependencies using:
`npm install`

### Running the app
`cd frontend` and run the app in development mode using:
`npm start`


## App Views and Features

### Homepage
Features:
* A list of all posts containing:
 * Post Title
 * Author
 * Number of Comments
 * Current Score with upvote and downvote
* A Sidebar containing the following sorting methods:
 * By Category
 * By Author - ascending and descending
 * By Title - ascending and descending

Posts can be edited, deleted or clicked on from the Homepage.

### Post View
Features:
* A view of the post containing:
 * Post Title
 * Post Body
 * Author
 * Number of Comments
 * Current Score with upvote and downvote
* List of comments containing:
 * Comment Title
 * Comment Body
 * Comment Author
 * Current Score with upvote and downvote

Posts and comments can be edited or deleted.

### New Post or Comment View
Features:
* A form with the form fields for entering the relevant data.
* Basic field validation.

Posts/Comments can be submitted or the process can be cancelled.

### Edit Post or Comment View
Features:
* A form with the relevant data pre-populated for editing.
* Basic field validation.

Posts/Comments can be submitted or the process can be cancelled.

## Backend Server

A backend server is provided to develop against. This server was developed by Udacity for the project. For further information on the server, incl. endpoints, see it's [README](https://github.com/robwa10/readable-project/blob/master/api-server/README.md).


## create-react-app

The frontend of this project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing
This React App was written as a project for the Udacity React Nanodegree program. Therefore, pull requests will not be accepted.
