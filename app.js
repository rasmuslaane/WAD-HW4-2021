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
    let posts = [
        { id:1, name: "Jon Snow", dp:"user.png", date: "Sep 18, 2020 15:16", image: "img1.jpeg", body: "I think it's going to rain", likes: "1440"},
        { id:2, name: "Lorem Ipsum", dp:"wick.png", date: "Feb 22, 2022 22:22", image: "img2.jpeg", body: "I think I'm back", likes: "2022" },
    ];
    res.render('posts', { posts: posts , title: 'Posts page'});
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
