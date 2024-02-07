require("dotenv").config()
// npm install cors
// const cors = require(&#39;cors&#39;);
// const express = require(&#39;express&#39;);
// const app = express();
// // Enable CORS
// app.use(cors());
const cors=require('cors')
const express=require('express')
const app=express();
const mongoose=require('mongoose')
const taskRouter=require('./routes/task')
const userRouter=require('./routes/user')
const bodyParser=require('body-parser')
app.use(cors());
app.use(bodyParser.json());
app.use('/task',taskRouter);
app.use('/user',userRouter);
const CONECTION_URL="mongodb+srv://Task:123@cluster0.pjg6wih.mongodb.net/?retryWrites=true&w=majority";
const PORT=5000;
mongoose.connect(CONECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>app.listen(PORT,()=>console.log(`server runing on port ${PORT}`)))
    .catch((error)=>console.log(error.message));
//     echo "# project_node_react" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/EfratGefen/project_node_react.git
// git push -u origin main
//////////////
// git remote add origin https://github.com/EfratGefen/project-node-react.git
// git branch -M main
// git push -u origin main    React/
      //  node/