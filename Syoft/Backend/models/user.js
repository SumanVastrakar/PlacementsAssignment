import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username : {type : String, required : true},
    phone : {type : Number, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    id : {type : String},
    role : { type : String, enum : ["admin", "manager", "staff"] }
})

export default mongoose.model("User", userSchema);