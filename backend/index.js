import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import movieRoute from "./route/movie.route.js"
import cors from "cors"

const app = express();
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 4000
// const URI = process.env.MONGO_URI

//connect to Mongo DB
try{
    mongoose.connect("mongodb://localhost:27017/cinemaStore", {

        useNewUrlParser: "true",
        useUnifiedTopology: "true"
      
      })
    console.log("conectado a Mongo DB");
}catch(error){
    console.log("ERROR", error);
}

//definimos route
app.use("/movies", movieRoute);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})