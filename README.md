# 🌐 URL Shortener

Welcome to the **URL Shortener** application! This tool allows users to shorten long URLs into more manageable links. You can access the live application at [ktzr.lol](https://ktzr.lol).

## 🛠️ Setup Instructions

### Prerequisites

- Ensure that [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) are installed on your system.

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

### 2. Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start MongoDB:
   ```bash
   mongod
   ```
4. Run the backend server:
   ```bash
   node server.js
   ```

### 3. Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```
2. Install the frontend dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start
   ```

## 🚀 Running the Application

1. Ensure the backend (`mongod` and `node server.js`) is running.
2. Ensure the frontend (`npm start`) is running.
3. Open your web browser and navigate to:
   - **Local Development**: [http://localhost:3000](http://localhost:3000)
   - **Live Version**: [ktzr.lol](https://ktzr.lol)

## 🧪 Testing the Application

To run tests for this application:

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Launch the test runner:
   ```bash
   npm test
   ```
   This will run all tests, including checking if the "learn react" link is rendered correctly in `App.test.js`.

## 📜 Available Scripts

Inside the `frontend` directory, the following scripts are available:

- **`npm start`**: Runs the app in development mode.
- **`npm test`**: Runs the test suite in watch mode.
- **`npm run build`**: Builds the app for production in the `build` folder.
- **`npm run eject`**: Ejects the app, allowing for full configuration control.

Feel free to reach out for contributions or issues!
