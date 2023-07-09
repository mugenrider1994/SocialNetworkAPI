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
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match:[/.+@.+..+/,"Please enter a valid email"],
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: 'thought',
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('thoughtCount').get(function(){
  return this.thoughts.length
})

const User = model('user', userSchema);

module.exports = User;
