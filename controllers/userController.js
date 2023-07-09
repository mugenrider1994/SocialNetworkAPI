const { User, Thought } = require('../models');

const User = require('../models/User.js')

//defining User route functionality
//Using async/await


//Controller to return all users
const getUsers = async (req,res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: 'Server Error' });
    }
};

//Controller to get a single user by Id value
//Error catching if no user id is found

const getSingleUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        if (!user) {
            return res.status(400).json({message: 'No user found with this Id!'})
        }
        res.json(user);
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error'})
    }
}

//Controller to create a new user 

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error'})
    }
}

// controller to update a user using userId paramater
// Had to refresh with the mongoose docs on the findByIdAndUpdate method
const updateUser = async (req, res) => {
    try {
        // using the 'new' option to return updated document
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true, runValidators:true
        });
        // conditional to return error if user id not found
        if (!user) {
            return res.status(400).json({message :'No user found with this Id!'})
        }
        res.json(user)
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server Error'})
    }
 }

 // controller to delete user by id
// Still need to look at deleting thoughts on delete
 const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.userId)
        if (!user) {
            return res.status(400).json({message: 'No user found with this Id!'})
        }
        res.json({ message: 'User deleted successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error'})
    }
 }

 //controller to add a friend to a user
 const addFriend = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        //Using the mongodb $addtoset operator to add the paramter friend to friends array
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );
  
      if (!user) {
        return res.status(400).json({ message: 'Id not found!' });
      }
  
      res.json({ message: 'Friend added successfully!' });
    } 
    catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  };

 //Controller to remove friend from users friend array

 const removeFriend = async (req,res) => {
    try {
        const user = await User.findById(req.params.userId);
        const friend = await User.findById(req.params.friendId);
        // checking for valid ids
        if (!user || !friend) {
            return res.status(400).json({message: 'Id not found!'})
        }
        //using array method indexOf() to locate if friend id exists in array
        //if it exists, delete it from the array using the splice method
        const friendIndex = user.friends.indexOf(friend._id);
        if (friendIndex !== -1) {
            user.friends.splice(friendIndex, 1); 
            await user.save();
        }
        res.json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error: "Server Error"})
        
    }
 }


 //Exporting controllers for use in user routes
 module.exports = {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
 }