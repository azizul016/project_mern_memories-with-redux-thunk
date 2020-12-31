import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
  title:  String, 
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount:{
      type: Number,
      default: 0,
  },
  createdAt:{
      type: Date,
      default: new Date(),
  },
});

const PostMessage = mongoose.model('postMessage', postSchema);
export default PostMessage;






// import mongoose from 'mongoose';

// const postSchema = mongoose.Schema({
//     title: String,
//     message: String,
//     creator: String,
//     tags: [String],
//     selectedFile: String,
//     likeCount: {
//         type: Number,
//         default: 0,
//     },
//     createdAt: {
//         type: Date,
//         default: new Date(),
//     },
// })

// var PostMessage = mongoose.model('PostMessage', postSchema);

// export default PostMessage;