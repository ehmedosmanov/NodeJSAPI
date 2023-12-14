import mongoose from "mongoose";
import  movieSchema  from "../schemas/movieSchema.js";

const Movies = mongoose.model("movies",movieSchema)

export default Movies