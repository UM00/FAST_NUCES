const express = require("express");
const mongoose = require("mongoose");
const app = express();
const UserModel = require("./model/user");
const cors = require("cors");

app.use(cors());
app.use(express.json());
mongoose.connect(
    "mongodb+srv://UMOO:umoo1906@cluster0.slbp9cb.mongodb.net/?retryWrites=true&w=majority"
    );

app.get("/getUsers", (req,res) => {
   UserModel.find({}, (err,result) => {
    if(err){
      res.json(err);
    } else {
        
      res.json(result);
    }
   });
});

app.post("/createUser",async (req,res) => {
  const user =req.body
  const newUser =new UserModel(user);
  await newUser.save();

  res.json(user);

});


app.listen(3001, () =>{
    console.log("Server is running at port 3001");
    
    
});