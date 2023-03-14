// requiring express to create the API for our server
const express = require('express');
// now creating the server
const app = express();
// creating mongoose to connect with database
const mongoose = require('mongoose');
// DOTE ENV
require("dotenv/config");
//import bodyparser from react-bodyparser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// Import the routes
const postRoute = require("./routes/posts");

app.use("/posts", postRoute);


app.get('/' , (req, res) =>{
    res.send("I'm inside the Home Page");
})





// connect to the database
try{
    mongoose.connect(process.env.DB_CONNECTION)
    .then(console.log("database connected"))
}catch(err){
    console.log(" not connected");
}
// now our app should listen a port number
//creating the Port
app.listen(3000);







//middle-ware or controller

//routes
//GET() -> fetch the data, POST() -> push the data
// PATCH() -> update the data, DELETE() -> delete the data
