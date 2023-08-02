const Thought = require('../models/Thought.js');
const User = require('../models/User.js');

// Get all thoughts
const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Get a single thought by its ID
const getSingleThought = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(400).json({ message: 'No thought found!' });
    }
    res.json(thought);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Create a new thought
const createThought = async (req, res) => {
  try {
    const { thoughtText, username, userId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: 'No user found using this Id!' });
    }
    const thought = await Thought.create({ thoughtText, username, userId });
    user.thoughts.push(thought._id);
    await user.save();
    res.json(thought);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Update an existing thought by its ID
const updateThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      req.body,
      { new: true, runValidators: true }
    );
    if (!thought) {
      return res.status(400).json({ message: 'No thought found!' });
    }
    res.json(thought);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Delete a thought by its ID
const deleteThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!thought) {
      return res.status(400).json({ message: 'No thought found!' });
    }
    const user = await User.findOne({ username: thought.username });
    user.thoughts.pull(thought._id);
    await user.save();
    res.json({ message: 'Deleted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Add a reaction to a thought
const addReaction = async (req, res) => {
  try {
    const { reactionBody, username } = req.body;

    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(400).json({ message: 'No thought found with this Id!' });
    }
    thought.reactions.push({ reactionBody, username });
    await thought.save();
    res.json(thought);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  updateThought,
};