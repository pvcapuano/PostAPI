const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  liked: {
    type: Boolean,
    default: false,
  }
})

module.exports = mongoose.model("Post", postSchema)