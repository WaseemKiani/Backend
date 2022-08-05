const app = require("./app");
const dotenv = require("dotenv")
const connectDatabase = require("./Config/database.js");

dotenv.config({path:"Config/Config.env"})


connectDatabase();
console.log("its us",process.env.PORT);
app.listen(process.env.PORT,()=>{
    console.log(`I am running on Port ${process.env.PORT}`);
})