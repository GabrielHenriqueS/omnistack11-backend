import express from 'express';
import cors from 'cors';
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
  }
}

export default new App().app;
