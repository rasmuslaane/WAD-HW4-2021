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



app.get('/addnewpost', (req, res) => {
    res.render('addnewpost', {title: 'Create a post'});
});

/*
app.get('/singlepost', (req, res) => {
    let posts = [
        {
            id: 1,
            name: "Jon Snow",
            dp: "user.png",
            date: "Sep 18, 2020 15:16",
            image: "img1.jpeg",
            body: "I think it's going to rain",
            likes: "1440"
        },
        {
            id: 2,
            name: "Lorem Ipsum",
            dp: "wick.png",
            date: "Feb 22, 2022 22:22",
            image: "img2.jpeg",
            body: "I think I'm back",
            likes: "2022"
        },
        {
            id: 3,
            name: "Dolor sit amet",
            dp: "",
            date: "Apr 5, 2022 23:55",
            image: "",
            body: "This post does not have any images. Not for content nor for user display picture",
            likes: "404"
        },
    ];
    res.render('singlepost', {posts: posts, title: 'Single post'});
});
*/

// Single page - hetkel veel KATKI
app.get('/singlepost/:id', async(req,res)=>{
    try {
        console.log("received singlepage GET request with ID");
        const {id} = req.params.id;
        console.log(id);
        const posts = await pool.query(
            "SELECT * FROM postrecords WHERE id=$1",[id]
        );
        console.log(posts);
        res.render('singlepost', { posts: post.rows[0] , title: 'Singlepost page'});
    } catch (err) {
        console.log(err.message);
    }
})


app.use((req, res) => {
    res.status(404).render('404', {title: '404 Error'});
});

app.get('/posts/:id', async (req, res) => {
    try {
        console.log("get a post request has arrived");
        const posts = await pool.query(
            "SELECT * FROM nodetable WHERE id = $1", [id]
        );
        res.json(posts.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete('/posts/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const post = req.body;
        console.log("delete a post request has arrived");
        const deletepost = await pool.query("DELETE FROM nodetable WHERE id = $1", [id]
        );
        res.json(post);
    } catch (err) {
        console.error(err.message);
    }
});
