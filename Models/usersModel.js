const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true,"Please Enter Your Name"]
    },
    email:{
        type: String,
        required: [true,"Please Enter Your Email"],
        unique: true
    },
    password:{
        type: String,
        required: [true,"Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false,
    },
    role:{
        type: String,
        default: "user"
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password,10);
})

userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET);
}

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
};

module.exports = mongoose.model("User",userSchema);