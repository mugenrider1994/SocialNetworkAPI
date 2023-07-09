const { Schema, model } = require('mongoose');

//User = course
//student = thought
//reaction = assignment

// Schema to create a user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match:[/.+@.+..+/,"Please enter a valid email"],
    },
    thoughts: [
      {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
   
  });

userSchema.virtual('friendCount').get(function(){
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
