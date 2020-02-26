import * as mongoose from 'mongoose';
import Post from './posts.interface';

const postSchema = new mongoose.Schema({
  author: String,
  content: String,
  title: String,
});

// TypeScript will be aware of all the fields you defined in the interface
const postModel = mongoose.model<Post & mongoose.Document>('Post', postSchema);

export default postModel;