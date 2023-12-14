import mongoose from "mongoose";

const { Schema } = mongoose;

const movieSchema = new Schema(
  {
    name: { type: String },
    title: { type: String },
    category: { type: Schema.Types.ObjectId, ref: "categories"},
  },
  { timestamps: true }
);

export default movieSchema;
