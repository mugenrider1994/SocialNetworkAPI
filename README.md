# Social Network API

This is an API for a social network web application that allows users to share thoughts, react to friends' thoughts, and create a friend list. The application uses a NoSQL database (MongoDB) to handle large amounts of unstructured data efficiently.

## User Story

As a social media startup, we want an API for our social network that uses a NoSQL database, so our website can handle large amounts of unstructured data.

## Acceptance Criteria

- The server is started, and the Mongoose models are synced to the MongoDB database.
- API GET routes for users and thoughts return data in a formatted JSON.
- API POST, PUT, and DELETE routes for users and thoughts are successfully tested in Insomnia.
- API POST and DELETE routes for reactions to thoughts and adding/removing friends to a user’s friend list are successfully tested in Insomnia.

## Installation

To run the Social Network API, you need the following technologies:

- Node.js
- Express.js
- Mongoose ODM
- MongoDB

## Dependencies

The project uses the following main dependencies:

- express
- mongoose

You can find the complete list of dependencies in the `package.json` file.

## Getting Started

Follow these steps to set up the development environment and run the API:

1. Clone the GitHub repository:
git clone https://github.com/mugenrider1994/nosql18.git

css
Copy code

2. Navigate to the project directory:
cd nosql18

arduino
Copy code

3. Install the dependencies using npm:
npm install

bash
Copy code

4. Start the server and sync Mongoose models to the MongoDB database:
npm start

sql
Copy code

5. The API should now be running on `http://localhost:3001`.

## API Documentation

The Social Network API provides the following endpoints:

- **GET `/api/users`**: Get a list of all users in the database.
- **GET `/api/users/:id`**: Get details of a specific user by their ID.
- **POST `/api/users`**: Create a new user.
- **PUT `/api/users/:id`**: Update an existing user by their ID.
- **DELETE `/api/users/:id`**: Delete a user by their ID.

- **GET `/api/thoughts`**: Get a list of all thoughts in the database.
- **GET `/api/thoughts/:id`**: Get details of a specific thought by its ID.
- **POST `/api/thoughts`**: Create a new thought.
- **PUT `/api/thoughts/:id`**: Update an existing thought by its ID.
- **DELETE `/api/thoughts/:id`**: Delete a thought by its ID.

- **POST `/api/thoughts/:thoughtId/reactions`**: Add a reaction to a thought.
- **DELETE `/api/thoughts/:thoughtId/reactions/:reactionId`**: Remove a reaction from a thought.

- **POST `/api/users/:userId/friends/:friendId`**: Add a friend to a user's friend list.
- **DELETE `/api/users/:userId/friends/:friendId`**: Remove a friend from a user's friend list.

## Demonstration Video

You can find a demonstration video of the Social Network API [here](https://drive.google.com/file/d/1WeoCmb6wrjHiVLAtt5H6ul0SuTJs5yDP/view).

## Contributing

We welcome contributions to improve the Social Network API. If you find any issues or want to add new features, please feel free to submit a pull request.

## License

The Social Network API is open-source and distributed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Future Development

There are a few adjustments that need to be made to some of the routes.
