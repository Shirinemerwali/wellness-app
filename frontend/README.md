# EssenceFlow

Fullstack wellness application built with React, Express and MongoDB featuring authentication, nutrition tracking, workouts, journaling and backend testing workflows.

## Features

- User authentication
- Nutrition tracker
- Workout section
- Journal with motivational quotes API
- Dashboard navigation
- Logout functionality
- Backend API routes
- MongoDB database connection

## Tech Stack

Frontend:
- React
- CSS
- Vite

Backend:
- Node.js
- Express
- MongoDB
- Mongoose

## Installation

Frontend:

```bash
npm install
npm run dev
```

Backend:

```bash
npm install
npm start
```

## Authentication

Users can:
- Create an account
- Login
- Logout

## API Integration

The journal page uses a quotes API to display motivational quotes dynamically.

## Testing

Backend testing workflows and API testing are being implemented to ensure stable and reliable functionality.

## Environment Variables

Create a `.env` file inside the backend folder and add:

```env
MONGO_URI=your_mongodb_connection
PORT=3001
JWT_SECRET=your_secret_key
```