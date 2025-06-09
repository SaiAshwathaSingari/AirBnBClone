const express = require('express');
const path = require('path');
const rootdir = require('../utils/pathUtil');

const errorHandlingPage = express.Router();

errorHandlingPage.use((req,res,next)=>{
  
  res.status(404).sendFile(path.join(rootdir,'./views/error.html'));
});

exports.errorHandlingPage = errorHandlingPage;