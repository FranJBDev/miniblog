import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import json from './posts.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let app = express();
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const posts = json.posts;

app.get('/', (req, res) => res.render('home', { posts }));
app.get('/posts/:handle', (req, res) => {
  const post = posts.filter((e) => e.handle == req.params.handle);
  console.log('handle', post);
  res.render(`posts/post`, {
    post: post[0],
  });
});

app.listen(app.get('port'), function () {
  console.log('Listening in port %d', app.get('port'));
});
