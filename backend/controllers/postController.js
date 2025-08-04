import Post from '../models/Post.js';
import User from '../models/User.js';

export const createPost = async (req, res) => {
  const { content } = req.body;
  try {
    const post = await Post.create({ content, author: req.user._id });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Post creation failed' });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'name').sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching posts' });
  }
};

