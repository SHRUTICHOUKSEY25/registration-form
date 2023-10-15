const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://shruti25:Khushi123@cluster0.fy4hszu.mongodb.net/registerform?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected...")
})
.catch((err)=>{
    console.log("no connection");
    console.log(err);
})