# To-Do List

Welcome to the To-Do List project! This project is a simple web application for managing your tasks.

## Features

- **User Authentication:** Allows users to sign up and log in securely to access their to-do lists.
- **Create Tasks:** Users can create new tasks with titles, descriptions, and due dates.
- **Update Tasks:** Users can edit existing tasks to modify their titles, descriptions, and due dates.
- **Delete Tasks:** Users can delete tasks that they no longer need.
- **Mark as Completed:** Users can mark tasks as completed when they are done.
- **Filter Tasks:** Users can filter tasks based on their completion status or due dates.

## Technologies Used

- **Node.js:** Runtime environment for running JavaScript on the server.
- **Express.js:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing user data and task information.
- **Mongoose:** Object Data Modeling (ODM) library for MongoDB and Node.js.
- **bcrypt:** Library for hashing passwords securely.
- **JSON Web Tokens (JWT):** Standard for securely transmitting information between parties.
- **Postman:** API client for testing and debugging HTTP requests.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AnoushahWasif/To-Do-List.git
   ```

2. Navigate to the project directory:

   ```bash
   cd To-Do-List
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

   Replace `<your-mongodb-uri>` with the connection URI for your MongoDB database and `<your-jwt-secret>` with a secret key for signing JWT tokens.

5. Start the server:

   ```bash
   npm start
   ```

6. Open your web browser and navigate to `http://localhost:3000` to use the application.

## API Endpoints

- **POST `/signup`**: Create a new user account.
- **POST `/login`**: Log in with an existing user account.
- **GET `/tasks`**: Get all tasks for the authenticated user.
- **POST `/tasks`**: Create a new task for the authenticated user.
- **PUT `/tasks/:id`**: Update an existing task for the authenticated user.
- **DELETE `/tasks/:id`**: Delete an existing task for the authenticated user.

## Usage

1. Sign up for a new account by sending a POST request to `/signup` with your email and password.
2. Log in with your email and password by sending a POST request to `/login`.
3. Use the provided API endpoints to manage your tasks: create, read, update, and delete tasks as needed.
4. Authenticate your requests by including a valid JWT token in the `Authorization` header.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or feature requests, please open an issue or submit a pull request.
