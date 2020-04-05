# ChatBot REST API

A collection of convenient REST API commands for use on localhost (or whatever server you want!) for use with chatbots, but really can be used for anything that could benefit from a simple REST API.

This project uses Node, React, and [Express](https://github.com/expressjs/express) (a lightweight server framework for Node).

## Getting Started

Clone or download the project to your computer and run `npm install` in the root directory (where `package.json` is located). The main application file is `src/app.js` so either navigate into `src` to run `node app.js` or from the root directory just make sure to call it as `node src/app.js`.

**Note:** currently the app is setup to run on port 3000 but you can go and change this in `src/app.js` at the top, the line that reads `app.listen(3000, () =>`

## Event method

To use the `Event` GET method you need to call the url 
```
http://localhost:3000/event?Month=1&Day=1
```
 and just replace the `Month` and `Day` values with whatever you would like to count down to. This example counts down to January 1st. If the date you specify has already passed, the method simply counts down to the next instance of this date (useful for things that repeat annually). This example also assumes you are running on localhost (: