const express = require('express');
const path = require('path');
const userRoute = express.Router();
userRoute.get("/",(req,res,next) =>{
  console.log(req.url,req.method);
  res.sendFile(path.join(__dirname, '../views/usersRouter.html'));
  
});

exports.userRoute = userRoute;