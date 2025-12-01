const mongoose = require("mongoose");

// create a schema
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String

});



// create a model
const Post = mongoose.model("Post", postSchema);


module.exports = Post; 