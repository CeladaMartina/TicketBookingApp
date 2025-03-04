import mongoose from "mongoose";

const movieSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})
const Movie = mongoose.model("movies", movieSchema);

export default Movie;