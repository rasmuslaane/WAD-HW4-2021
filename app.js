const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.use(express.static('Public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/posts', (req, res) => {
    res.render('posts');
});

app.get('/addnewpost', (req, res) => {
    res.render('addnewpost');
});

app.get('/singlepost', (req, res) => {
    res.render('singlepost');
});

app.use((req, res) => {
    res.status(404).render('404');
});
