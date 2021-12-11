const express = require('express');
const app = express();
const pool = require('./database');
const cors = require('cors');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(3000,()=>{
    console.log("Server is listening port 3000")
});

app.use(express.static('Public'));

app.get('/', (req, res) => {
    res.redirect(301, '/posts');
});

app.get('/index', (req, res) => {
    res.redirect(301, '/posts');
});

app.get('/addnewpost', (req, res) => {
    res.render('addnewpost', {title: 'Create a post'});
});

// andmebaasist
app.get('/posts', async(req, res) => {
    try {
        console.log("get all posts from DB");
        const posts =  await pool.query(
            "SELECT * FROM postrecords"
        );
        //res.json(posts.rows);
        res.render('posts', { posts: posts.rows , title: 'Posts page'});
    } catch (err) {
        console.log(err.message);
    }
});

// Single page - hetkel veel KATKI
app.get('/singlepost/:id', async(req, res) => {
    try {
        const id = req.params.id;
        console.log(req.params.id);
        console.log("get a single post request has arrived");
        const posts = await pool.query(
            "SELECT * FROM postrecords WHERE id = $1", [id]
        );
        res.render('singlepost', { posts: posts.rows[0], title: 'Single post' });
    } catch (err) {
        console.error(err.message);
    }
});


app.use((req, res) => {
    res.status(404).render('404', {title: '404 Error'});
});

app.get('/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        console.log("get a post request has arrived");
        const Apost = await pool.query(
            "SELECT * FROM postrecords WHERE id = $1", [id]
        );
        res.json(Apost.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete('/posts/:id', async(req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const post = req.body;
        console.log("delete a post request has arrived");
        const deletepost = await pool.query(
            "DELETE FROM postrecords WHERE id = $1", [id]
        );
        res.redirect('posts');
    } catch (err) {
        console.error(err.message);
    }
});

app.post('/posts/', async(req, res) => {
    try {
        console.log("a post request has arrived");
        const post = req.body;
        const newpost = await pool.query(
            "INSERT INTO postrecords(name, date, body, likes) values ($1, $2, $3, $4) RETURNING*", [post.name, post.date, post.body, post.likes]
    );
        res.json( newpost );
    } catch (err) {
        console.error(err.message);
    }
});
