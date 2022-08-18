const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const workerSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true,"Please Enter Your Name"]
    },
    category:{
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
        minLength: [8, "Password should be greater than 8 characters"]
    },
    perHourRate:{
        type: Number,
        default: 0,
    },
    role:{
        type: String,
        default: "worker"
    },
    completedOrders:{
        type: Number,
        default:0
    },
    pendingOrders:{
        type: Number,
        default:0
    },
    ordersRequest:{
        type: Number,
        default:0
    },
    createdAt:{
        type: Date,
        default: Date.now    
    },
    image:{
        type: String,
    }
})

workerSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password,10);
})

workerSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET);
}

workerSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
};

module.exports = mongoose.model("Worker",workerSchema);