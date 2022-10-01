const express = require('express');
const path = require('path');

let app = express();
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', pug);

const posts = [
  {
    handle: 'el-blog-mas-rapido',
    titulo: 'El bolg mas rapido',
    description: 'En este post te muestro como hacer tu blog rapido',
  },
  {
    handle: 'seo-para-tu-blog',
    titulo: 'Como mejorar el SEO de tu blog',
    description: 'En este post te muestro como hacer el mejor SEO',
  },
  {
    handle: 'analiticas-para-tu-blog',
    titulo: 'Como instalar y trackear a tu audiencia',
    description:
      'En este post te muestro como trackear lo que tu audiencia lee',
  },
];

app.get('/', (req, res) => res.render('home'));

app.listen(app.get('port'), function () {
  console.log('Listening in port %d', app.get('port'));
});
