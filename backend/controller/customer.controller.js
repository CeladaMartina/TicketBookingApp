import Customer from "../model/customer.model.js";

export const getCustomer = async(req, res) => {
    try{
        const customer = await Customer.find();
        res.status(200).json(customer);
    }catch(error){
        console.log("error:", error);
        res.status(500).json(error);
    }
}