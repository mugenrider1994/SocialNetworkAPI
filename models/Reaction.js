const { Schema, model, Types } = require('mongoose');

// Define the schema for a reaction
const reactionSchema = new Schema(
  {
    // Auto-generate a unique ID for the reaction
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    // Text body of the reaction, limited to 280 characters
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    // Username of the user who created the reaction
    username: {
      type: String,
      required: true,
    },
    // Timestamp of when the reaction was created
    createdAt: {
      type: Date,
      default: Date.now,
      // Format the createdAt value to ISO 8601 string using .toISOString()
      get: (createdAtVal) => createdAtVal.toISOString(),
    },
  }
);

// Create a 'Reaction' model using the defined schema
const Reaction = model('Reaction', reactionSchema);

// Export the 'Reaction' model to be used in other parts of the application
module.exports = Reaction;