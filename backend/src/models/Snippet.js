import mongoose from "mongoose";

const snippetSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    language: {
  type: String,
  required: true,
  enum: ["js", "javascript"]
},
    tags: [String],
  },
  { timestamps: true }
);

const Snippet = mongoose.model("Snippet", snippetSchema);

export default Snippet;
