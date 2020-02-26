import * as express from 'express';
import Post from './posts.interface';
import postModel from './posts.model'
import Controller from 'interfaces/controller.interface';

class PostController implements Controller {
  public path = '/posts';
  public router = express.Router();

  // private posts: Post[] = [
  //   {
  //     author: 'Nacho',
  //     content: 'hey there',
  //     title: 'hey'
  //   }
  // ];

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAllPosts.bind(this));
    this.router.get(`${this.path}/:id`, this.getPost);
    this.router.post(this.path, this.createPost);
    this.router.patch(`${this.path}/:id`, this.modifyPost);
    this.router.delete(`${this.path}/:id`, this.deletePost);
  }

  getAllPosts = (req: express.Request, res: express.Response) => {
    // res.send(this.posts);
    postModel.find()
      .then(result => {
        res.send(result);
      })
  }

  getPost = (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    postModel.findById(id)
      .then(result => {
        res.send(result);
      })
  }

  createPost = (req: express.Request, res: express.Response) => {
    const postData: Post = req.body;
    // console.log(req.body);
    // this.posts.push(post);
    // res.send(post);
    console.log(postData);
    const addPost = new postModel(postData);

    addPost.save()
      .then(result => {
        res.send(result);
      })
  }

  modifyPost = (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    const postData: Post = req.body;
    console.log(postData);
    postModel.findByIdAndUpdate(id, postData, { new: true })
      .then(result => {
        res.send(result);
      })
  }

  deletePost = (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    postModel.findByIdAndDelete(id)
      .then(successResponse => {
        if (successResponse) return res.send(200);
        else return res.send(404);
      })
  }

}

export default PostController;

