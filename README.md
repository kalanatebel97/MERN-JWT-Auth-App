```markdown
# MERN Authentication Project

This project is a starter application for a MERN (MongoDB, Express, React, Node.js) stack with authentication using JWT and HTTP-Only cookies. This setup provides a single page application (SPA) workflow.

## Features

- Backend API with Express & MongoDB
- Authentication routes: login, logout, register, profile, update profile
- JWT authentication stored in HTTP-only cookies
- Protected routes and endpoints
- Custom middleware for JWT validation
- Custom error handling middleware

## Getting Started

### Prerequisites

- Create a MongoDB database and obtain your MongoDB URI
- Ensure you have Node.js and npm installed

### Environment Variables

Rename the `.env.example` file to `.env` and configure the following variables:

```bash
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### Installation

1. Install backend dependencies:
    ```bash
    npm install
    ```

2. Navigate to the frontend directory and install dependencies:
    ```bash
    cd frontend
    npm install
    ```

### Running the Application

To run both the frontend and backend concurrently:

```bash
npm run dev
```

To run only the backend server:

```bash
npm run server
```

### Building the Frontend

For production build:

```bash
cd frontend
npm run build
```

## Dependencies

- bcryptjs: ^2.4.3
- cookie-parser: ^1.4.6
- dotenv: ^16.4.5
- express: ^4.19.2
- express-async-handler: ^1.2.0
- jsonwebtoken: ^9.0.2
- mongodb: ^6.8.0
- mongoose: ^8.5.2
- nodemon: ^3.1.4
