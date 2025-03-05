import mongoose from "mongoose";

const customerSchema=mongoose.Schema({
    dni:String,
    name:String,
    email:String,
    phone:String
})
const Customer = mongoose.model("customer", customerSchema);

export default Customer;