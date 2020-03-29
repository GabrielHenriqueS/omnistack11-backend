import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routes';

class App {
  constructor() {
    this.app = express();

    this.middlewares();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(routes);
    this.app.use(errors());
  }
}

export default new App().app;
