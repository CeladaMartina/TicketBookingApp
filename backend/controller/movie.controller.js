import Movie from "../model/movies.model.js";

export const getMovie = async(req, res) => {
    try{
        const movie = await Movie.find();
        res.status(200).json(movie);
    }catch(error){
        console.log("error:", error);
        res.status(500).json(error);
    }
}