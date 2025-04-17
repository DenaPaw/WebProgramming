import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: '', body: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error("Error fetching posts:", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      // Update post
      axios.put(`http://localhost:5000/posts/${editingId}`, form)
        .then(res => {
          setPosts(posts.map(post => post._id === editingId ? res.data : post));
          setForm({ title: '', body: '' });
          setEditingId(null);
        })
        .catch(err => console.error("Update error:", err));
    } else {
      // Create post
      axios.post('http://localhost:5000/posts', form)
        .then(res => {
          setPosts([...posts, res.data]);
          setForm({ title: '', body: '' });
        })
        .catch(err => console.error("Submit error:", err));
    }
  };

  const handleEdit = (post) => {
    setForm({ title: post.title, body: post.body });
    setEditingId(post._id);
  };

  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this?")) {
      axios.delete(`http://localhost:5000/posts/${id}`)
        .then(() => {
          setPosts(posts.filter(post => post._id !== id));
        })
        .catch(err => console.error("Error deleting:", err));
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>{editingId ? "Edit Post" : "Create a Blog Post"}</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <input
          name="title"
          placeholder="Post Title"
          value={form.title}
          onChange={handleChange}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />

        <textarea
          name="body"
          placeholder="Post Body"
          value={form.body}
          onChange={handleChange}
          style={{ width: '100%', padding: '10px', height: '100px', marginBottom: '10px' }}
        />

        <button type="submit" style={{ padding: '10px 20px' }}>
          {editingId ? "Update Post" : "Submit Post"}
        </button>
      </form>

      <h2>Blog Posts</h2>

      {posts.map(post => (
        <div key={post._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '15px' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => handleEdit(post)} style={{ marginRight: '10px' }}>Edit</button>
          <button onClick={() => handleDelete(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;