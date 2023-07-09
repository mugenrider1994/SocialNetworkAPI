const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

//Thought=thought

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

thoughtSchema.virtual('formatCreatedAt').get(function(){
  return this.createdAt.toLocaleDateString();
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
