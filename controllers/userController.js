const User = require('../models/User.js')



//get all users
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

//get user by Id

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

//create user 

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
//Update user
const updateUser = async (req, res) => {
    try {
        
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true, runValidators:true
        });
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

//delete user
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

 //add a friend
 const addFriend = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
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

//remove friend

 const removeFriend = async (req,res) => {
    try {
        const user = await User.findById(req.params.userId);
        const friend = await User.findById(req.params.friendId);
        if (!user || !friend) {
            return res.status(400).json({message: 'Id not found!'})
        }
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