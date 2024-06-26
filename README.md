# Project: Bike Rental Service

**Project Name:** Bike Rental Service

**Project Task:** Building the backend for a Bike Rental System.

**Project Motive:** Creating a backend system for a Bike Rental platform, including user logins, managing bike details and bike rental services.

## Server Live Link

Click here to see the Server Side Repository: [https://bike-rental-service-lilac.vercel.app](https://bike-rental-service-lilac.vercel.app)

## Project Overview Video

Click here to see the project overview video: [https://drive.google.com/file/d/1ZNGsMH3RE0AtLcmSCNnFQqNZ2YuPaIOm/view](https://drive.google.com/file/d/1ZNGsMH3RE0AtLcmSCNnFQqNZ2YuPaIOm/view)

## Project Features

1. **User logins:** Secure authentication for users to access the platform.
2. **Creating Bikes:** Creating Bike data for users for further rental system.
3. **Rental services:** Facilitating straightforward rentals of chosen Bikes by the users.

## Technologies

- TypeScript
- Express
- Cors
- Mongoose
- Zod
- bcrypt
- jsonwebtoken
- dotenv
- http-status-codes
- eslint
- prettier
- vercel

## :link: How to run the application locally

### Step 1: Clone the Repository

Firstly, we have to clone the repository to our local machine using Git.

```node
git clone <repository-url>
```

### Step 2: Navigate to the Project Directory

We need to navigate to the cloned repository directory.

```node
cd <repository-name>
```

### Step 3: Install Dependencies

Then we have to install the project's dependencies using npm.

```node
npm install
```

This command reads the package.json file in the project directory and installs all the required packages from the npm registry. With this command, node_modules will be installed.

### :arrow_forward: Step 4: Set up the `.env` File

Next, we will create a .env file in the root directory of our project. This file will hold the environment variables. `.env` file will look like this:

```node
PORT=5000
DATABASE_URL=mongodb://localhost:27017/mydatabase
```

We need to ensure that these variables are correctly referenced in our application, typically in a configuration file which is under `./src/config` folder named as `index.ts`.

### Step 5: Start the Server

To run our Express.js application, we will use the following command:

```node
npm run start:dev
```

### Step 6: Access the Application

Once the server is running, we can access the application by navigating to `http://localhost:<port>` in web browser. We have to replace the `<port>` with the port number specified in the .env file.

---

So, these are the steps to run an expressJs application locally.
