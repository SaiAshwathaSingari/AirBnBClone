const express = require('express');
const errorHandlingPage = express.Router();
errorHandlingPage.use((req,res,next)=>{
  res.status(404).send(`<h1>404 Error Page not Found</h1>`);
});

exports.errorHandlingPage = errorHandlingPage;