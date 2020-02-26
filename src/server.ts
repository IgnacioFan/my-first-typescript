import 'dotenv/config';
import App from './app';
import PostController from './posts/posts.controller';
// import validateEnv from './utils/validateEnv'


const app = new App(
  [
    new PostController(),
  ]
);

app.listen();