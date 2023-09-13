import express from 'express';
import 'dotenv/config';
import userRouter from './app/routes/UserRoutes.js';

const port = process.env.PORT;

const app = express();
app.use(express.json());

//Routes
app.get('/', function (req, res) {
  res.status(200).json({ service: 'server is runing!' });
});

app.use(userRouter);

app.listen(port, () => console.log('Api running port: ' + port));
