// Import necessary modules
const Post = require('../model/dailyfeed.js');

// Controller for handling CRUD operations on posts
const postController = {
  // Get all posts
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Get a single post by ID
  getPostById: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Create a new post
  createPost: async (req, res) => {
    try {
      const newPost = new Post({
        title: req.body.title,
        content: req.body.content
      });
      const savedPost = await newPost.save();
      res.status(201).json(savedPost);
    } catch (error) {
      res.status(400).json({ error: 'Bad request' });
    }
  },

  // Update a post by ID
  updatePost: async (req, res) => {
    try {
      const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedPost) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.json(updatedPost);
    } catch (error) {
      res.status(400).json({ error: 'Bad request' });
    }
  },

  // Delete a post by ID
  deletePost: async (req, res) => {
    try {
      const deletedPost = await Post.findByIdAndDelete(req.params.id);
      if (!deletedPost) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.json(deletedPost);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = postController;
