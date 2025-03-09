import Movie from "../model/movies.model.js";
import Stripe from "stripe";

//fixear obtener key
const stripe =  new Stripe("sk_test_51R0WdTPG1GttzLX3j46dMqsWYa4c1V4TGCk7EejKZ1BEbGaowIQb7OqJFxfmvo7cXZYvM3i5TR3YDIYuAAUVtk4V00z73lp1Qm", {
    apiVersion: "2023-10-16",
});

export const getMovie = async(req, res) => {
    try{
        const movie = await Movie.find();
        res.status(200).json(movie);
    }catch(error){
        console.log("error:", error);
        res.status(500).json(error);
    }
}

export const buyMovie = async(req, res) =>{
    try {
        const { products } = req.body;

        const lineItems = products.map((movie) => ({
            price_data: {
                currency: "USD",
                product_data: {
                    name: movie.name,
                    images: [movie.image],
                },
                unit_amount:  Math.round(parseFloat(movie.price) * 100), 
            },
            quantity: 1,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types:["card"],
            line_items: lineItems,
            mode:"payment",
            success_url:"http://localhost:3002/success",
            cancel_url:"http://localhost:3002/cancel"
        })
    
        res.json({id:session.id})

    } catch (error) {
        console.error("Error processing purchase:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }

    
}