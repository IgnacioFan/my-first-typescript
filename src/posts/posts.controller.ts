import * as express from 'express';
import Post from './posts.interface';

class PostController {
  public path = '/posts';
  public router = express.Router();

  private posts: Post[] = [
    {
      author: 'Nacho',
      content: 'hey there',
      title: 'hey'
    }
  ];

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAllPosts.bind(this));
    this.router.post(this.path, this.createPost);
  }

  getAllPosts = (req: express.Request, res: express.Response) => {
    res.send(this.posts);
  }

  createPost = (req: express.Request, res: express.Response) => {
    const post: Post = req.body;
    console.log(req.body);
    this.posts.push(post);
    res.send(post);
  }

}

export default PostController;

