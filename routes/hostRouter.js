const express = require('express');
const hostRouter = express.Router();
const path = require('path');

hostRouter.get("/host/add-home",(req,res,next) =>{

 
  res.sendFile(path.join(__dirname, '../views/hostRouter1.html'));
})

hostRouter.post("/host/add-home",(req,res,next)=>{
  console.log(req.body);
res.sendFile(path.join(__dirname, '../views/hostRouter2.html'));
});

exports.hostRouter = hostRouter;