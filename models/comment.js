const mongoose = require("mongoose");

// create a schema
const commentSchema = new mongoose.Schema({
   postId: mongoose.Schema.Types.ObjectId,
   user: String,
   text: String,
   likes: {type: Number, default: 0}

});



// create a model
const Comment = mongoose.model("Comment", commentSchema);


module.exports = Comment; 