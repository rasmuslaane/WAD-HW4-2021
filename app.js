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
            "select * from postrecords order by id desc"
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
        const { id } = req.params;
        const post = req.body;
        console.log("delete a post request has arrived");
        const deletepost = await pool.query(
            "DELETE FROM postrecords WHERE id = $1", [id]
        );
        res.json(post);
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
        res.redirect(301, '/posts');
    } catch (err) {
        console.error(err.message);
    }
});

// lets read the number of likes, increase by one and write back to the database
app.get('/likes/:id', async (req,res)=>{
    try{
        console.log("Changing the LIKE numbers request received");
        const {id} = req.params;
        
        //not really needed - for information only
        const initialLikes = await pool.query(
            "SELECT likes FROM postrecords WHERE id=$1",[id]
        );
        
        let likes = parseInt(initialLikes.rows[0]['likes']);
        likes+=1;
        console.log('New # of likes: '+likes);
        
        const result = await pool.query(
             "UPDATE postrecords SET likes = likes + 1 WHERE id=$1 RETURNING*",[id]
        );

        res.json(parseInt(initialLikes.rows[0]['likes']));
    } catch (err){
        console.log(err.message);
    }
});

app.use((req, res) => {
    res.status(404).render('404', {title: '404 Error'});
});
