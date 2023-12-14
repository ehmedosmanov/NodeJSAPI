import mongoose from "mongoose";
import categorySchema from "../schemas/categorySchema.js";

const Categories = mongoose.model("categories", categorySchema);

export default Categories;
