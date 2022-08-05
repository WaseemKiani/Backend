const mongoose = require("mongoose");

const connectDatabase = ()=>{

const db = "mongodb+srv://books:books@cluster0.mpd9q.mongodb.net/bookstore?retryWrites=true&w=majority"
mongoose.connect(db).then(()=>{
    console.log("Connection Successfull");
}).catch((error)=>{
    console.log("DB not connected");
})
}

module.exports = connectDatabase