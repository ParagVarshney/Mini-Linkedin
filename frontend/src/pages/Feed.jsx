import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns'; // ✅ import
import api from '../api';

function Feed() {
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);

  const submitPost = async (e) => {
    e.preventDefault();
    try {
      await api.post('/posts', { content });
      setContent('');
      fetchPosts();
    } catch (err) {
      alert('Error posting content');
    }
  };

  const fetchPosts = async () => {
    const res = await api.get('/posts');
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="feed-container">
      <h2>Feed</h2>
      <form onSubmit={submitPost} className="form-box">
        <textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Post</button>
      </form>

      <div className="posts">
        {posts.map((post) => (
          <div key={post._id} className="post">
            <strong>{post.author?.name}</strong>
            <span style={{ marginLeft: '10px', color: '#888', fontSize: '0.8rem' }}>
              {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
            </span>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
