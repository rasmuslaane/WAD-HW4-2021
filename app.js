const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.use(express.static('Public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Landing page'});
});

app.get('/index', (req, res) => {
    res.render('index',{ title: 'Landing page'});
});

app.get('/posts', (req, res) => {
    res.render('posts',{ title: 'Posts page'});
});

app.get('/addnewpost', (req, res) => {
    res.render('addnewpost',{ title: 'Create a post'});
});

app.get('/singlepost', (req, res) => {
    res.render('singlepost',{ title: 'Single post'});
});

app.use((req, res) => {
    res.status(404).render('404',{ title: '404 Error'});
});
