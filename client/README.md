Managing Contacts App

Overview

This is a web application that allows users to manage their contacts. 
The app consists of a server-side component written in Node.js and a front-side component written in React.

Installation
Clone the repository
Install the dependencies by running npm install in both the server-side and front-side directories.
Set up the environment variables as described in the Environment Variables section.

Server-side
To run the server-side of the application, follow these steps:
Navigate to the server directory.
Start the server by running npm run dev.
The server will be running on port 5000.

Front-side
To run the front-side of the application, follow these steps:

Navigate to the client directory.
Start the front-side by running npm start.
The front-side will be running on port 3000.

Dependencies
Server-side
axios: ^1.3.6
cors: ^2.8.5
dotenv: ^16.0.3
express: ^4.18.2
express-fileupload: ^1.4.0
pg: ^8.10.0
pg-hstore: ^2.3.4
sequelize: ^6.31.0
uuid: ^8.3.2
nodemon: ^2.0.22

Front-side
axios: ^1.3.6
logger: ^0.0.1
react: ^18.0.0
react-dom: ^18.2.0
react-router: ^6.10.0
react-router-dom: ^6.10.0
react-scripts: 5.0.1
web-vitals: ^2.1.4

Environment Variables
The following environment variables are required:

PORT: the port number that the server will run on.
DB_NAME: the name of the PostgreSQL database.
DB_USER: the username for the PostgreSQL database.
DB_PASSWORD: the password for the PostgreSQL database.
DB_HOST: the hostname for the PostgreSQL database.
DB_PORT: the port number for the PostgreSQL database
