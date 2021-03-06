const mongoose = require("mongoose");
const {Schema} = mongoose;

const schema =  new Schema({
    productName: {
        type: String,
        required: true,
    },
    description:{
        type:String,
    },
    imagePath:{
        type:String,
        default:"https://via.placeholder.com/250x250.png?text=No+Image",
    },
    quantity:{
        type: Number,
        default: 0,
    },
    unitPrice:{
        type: Number,
        deafult: 0,
    },
    categoryId:{
        type: String,
    },
    status: {
        type:String,
        default: "created",
    },
    updatedDate:{
        type: Date,
        default: Date.now,
    },
    createdDate:{
        type: Date,
    },
    deletedDate:{
        type: Date,
    },
})

module.exports = Product = mongoose.model("Product", schema);