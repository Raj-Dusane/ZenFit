# ZenFit - The Ultimate Fitness Tracker

ZenFit is a modern fitness tracking application designed to monitor workouts, track progress, and visualize fitness goals. The app features an intuitive user interface, robust backend integration, and provides insightful analytics which helps to stay motivated and achieve fitness milestones.


## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- 

## Features
- **Responsive Design**: Mobile-first design for a seamless experience on any device.
- **User Authentication**: Secure user authentication using JWT tokens.
- **Workout Tracking**: Log and track workouts with ease.
- **Progress Visualization**: Visualize progress over time with graphs and analytics.
- **Data Analytics**: Get detailed statistics on workout frequency, intensity, and more.
- **Date Picker**: Enhanced workout logging with MUI Date Pickers.


## Technologies Used
- **Frontend**: ReactJS, Redux, Axios.
- **Backend**: NodeJS, ExpressJS.
- **Database**: MongoDB Atlas.
- **Authentication**: JWT (JSON Web Tokens).
- **State Management**: Redux.
- **Styling**: Material-UI.
- **Package Manager**: npm.


## Installation
To get a local copy up and running, follow these simple steps:

### Prerequisites
- Node.js installed (v20.9.0 recommended).
- MongoDB installed locally or accessible via cloud (e.g., MongoDB Atlas).

### Clone the repository
```bash
git clone https://github.com/Raj-Dusane/ZenFit.git
cd ZenFit
```

### Backend Setup
1. Navigate to the server directory:
    ```bash 
    cd server
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Set up environment variables. Create a `.env` file in the `/server` directory with the following content: (refer to `.envExample` file)
    ```bash
    PORT=5000
    MONGO_URI=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret>
    ```
4. Start the server:
    ```bash
    npm run start
    ```

### Frontend Setup
1. Navigate to the client directory::
    ```bash 
    cd client
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Set up environment variables. Create a `.env` file in `/client` directory with the following content: (refer to .envExample file)
    ```bash
    REACT_APP_BASE_URL=http://localhost:8080/api/
    ```
4. Start the React development server:
    ```bash
    npm run start
    ```

## API Endpoints:
- **`User Sign Up:`** `POST /user/signup`
- **`User Sign In:`** `POST /user/signin`
- **`Get Dashboard Details:`** `GET /user/dashboard`
- **`Get Workouts:`** `GET /user/workout/:date`
- **`Add Workout:`** `POST /user/workout`