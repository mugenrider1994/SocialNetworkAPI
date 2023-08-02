const { connect, connection } = require('mongoose');

// Connection to mongoDB
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social_DB';

// Connect to the MongoDB database using Mongoose
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export the connection object
module.exports = connection;