const express = require('express');
const hostRouter = express.Router();

hostRouter.get("/host/add-home",(req,res,next) =>{
res.send(`
  <h1>Register your Home:</h1>
  <a href="/">Back to HomePage</a>
  <form action="/host/add-home" method="POST">
    <input type="text" name="houseName" placeholder="Home Name" required>
    <br>
    <button type="submit">Add Home</button>
  
  `);
})

hostRouter.post("/host/add-home",(req,res,next)=>{
  console.log(req.body);
res.send(`
  <h1>Home Added Successfully!</h1>
  <br>
  <a href="/">Back to HomePage</a>
  `)
});

exports.hostRouter = hostRouter;