const express = require('express');
const bodyParser = require('body-parser');
const {userRoute} = require('./routes/usersRouter')
const {hostRouter} = require('./routes/hostRouter');
const {errorHandlingPage} = require('./routes/errorhandlingpage');
const app = express();


const port = 3000;
app.use((req,res,next) =>{
  console.log(req.url,req.method);
  next();
});
app.use(express.urlencoded());

app.use(userRoute);
app.use(hostRouter);
app.use(errorHandlingPage);
app.listen(port, ()=>{
  console.log(`Server is running on http://localhost:${port}`);
})