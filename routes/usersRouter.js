const express = require('express');
const userRoute = express.Router();
userRoute.get("/",(req,res,next) =>{
  console.log(req.url,req.method);
  res.send(`<h1>Welcome to the AirBnB Clone</h1>
    <a href="/host/add-home">Add Home</a>
    
    `);
  
});

exports.userRoute = userRoute;