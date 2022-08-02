import mongoose from "mongoose"

const ProductSchema = mongoose.Schema({
    productName : {type : String, required : true},
    productPrice : {type : Number, required : true},
    productDescription : {type : String, required : true},
})

export default mongoose.model("Product", ProductSchema)