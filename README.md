# URL Shortener

This URL shortener application allows users to create shortened versions of long URLs. The application is accessible at [ktzr.lol](https://ktzr.lol).

## Setup Instructions

1. Clone the repository to your local machine.
2. Ensure you have Node.js and MongoDB installed on your system.

### Backend Setup

1. Navigate to the backend directory.
2. Run `npm install` to install the required dependencies.
3. Start MongoDB by running `mongod` in a terminal.
4. Start the backend server by running `node server.js`.

### Frontend Setup

1. Navigate to the frontend directory.
2. Run `npm install` to install the required dependencies.
3. Start the frontend development server by running `npm start`.

## Running the Application

1. Ensure the backend server is running (`mongod` and `node server.js`).
2. Ensure the frontend development server is running (`npm start`).
3. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to access the application locally.
4. To access the live application, visit [ktzr.lol](https://ktzr.lol).

## Testing the Application

To run the tests for this application:

1. Navigate to the frontend directory.
2. Run `npm test` to launch the test runner in interactive watch mode.

This will run the test suite, including the test in `App.test.js` which checks if the "learn react" link is rendered correctly.

## Available Scripts

In the frontend project directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Removes the single build dependency from your project.
  For more detailed information about these scripts, refer to the Create React App documentation.
