import express from 'express';
import routes from './routes/music.js'

const app = express();
const port = process.env.PORT || 3000;

app.use(routes);

app.listen(port, ()=> {
  console.log(`server listen on port ${port}`);
});