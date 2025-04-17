const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Connect to MongoDB

mongoose.connect('mongodb://localhost:27017/blogDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log('MongoDB Connected'))
.catch((err)=> console.error('MongoDB error', err));

// Define schema and model

const postSchema = new mongoose.Schema({
    title: String,
    body: String,
});

const Post = mongoose.model('Post', postSchema);

// Add routes...

app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch posts' });
    }
});
app.post('/posts', async (req, res) => {
    try {
        const { title, body } = req.body;
        const newPost = new Post({ title, body });
        await newPost.save();
        res.json(newPost);
    } catch (err) {
        res.status(500).json({ message: 'Failed to save post!' });
    }
});

//Backend: Add a new route in Express
app.delete('/posts/:id', async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.sendStatus(200);
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete post!' });
    }
});

//Backend: Add a new PUT route:
app.put('/posts/:id', async (req, res) => {
    try {
        const { title, body } = req.body;
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            { title, body },
            { new: true }
        );
        res.json(updatedPost);
    } catch (err) {
        res.status(500).json({ message: 'Failed to update post!' });
    }
});



// Start server!
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
