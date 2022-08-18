const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true,"Please Enter Your Name"]
    },
    address:{
        type: String,
        required: [true,"Please Enter Your Address"]
    },
    problemDiscription:{
        type: String,
        required: [true,"Please Enter Your Problem Discription"]
    },
    offer:{
        type: Number,
        required: [true,"Please Enter Your Offer"]
    },
    startDuration:{
        type: Date,
    },
    endDuration:{
        type: Date,
    },
    worker:{
        type: String,
        required: [true,"Please Enter Worker's ID"]
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true,"Please Enter Your Problem Discription"]
    }
})


module.exports = mongoose.model("Order",orderSchema);


