const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // using the .toISOString for the date formatting
      get: createdAtVal => createdAtVal.toISOString()
  }
  }
);



const Reaction = model('Reaction', reactionSchema)


module.exports = Reaction;
