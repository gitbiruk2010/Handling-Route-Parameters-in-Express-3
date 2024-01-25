
![server running](https://github.com/gitbiruk2010/Handling-Route-Parameters-in-Express-3/assets/103274295/26f69fb1-430f-4024-ac83-5987a42ce543)

Express Server Example: Dynamic Routing and Error Handling

This document provides an overview and instructions for a basic Express server script. The script demonstrates dynamic route handling, error management (specifically for undefined routes), and server initialization in Node.js using the Express framework.
Overview

The script creates a simple web server using Express, a popular web framework for Node.js. This server includes:

    Dynamic Route Handling: The server can handle requests to dynamic URLs, specifically to paths like /user/:username. It extracts a parameter (username) from the URL and sends a personalized response.
    Error Management: The server includes error handling for undefined routes, returning a 404 Not Found status.
    Server Launch: Code to start the server and listen on a specified port (default is 3000 or can be set via an environment variable).

Prerequisites

To run this script, ensure you have the following installed:

    Node.js
    npm (Node Package Manager)

Setup Instructions

    Install Dependencies: If you haven't already installed Express in your project, run the following command in your project directory:

    bash

npm install express

Server Script: Place the provided script in a file, for example, server.js.

Start the Server:

    Navigate to your project directory in the command line.
    Run the server using Node.js:

bash

    node server.js

    This will start the server on the specified port (default is 3000).

Testing the Server

To test the dynamic routing:

    Open a web browser or a tool like Postman.
    Navigate to http://localhost:3000/user/[username], replacing [username] with any name of your choice.
    You should see a response like Hello [username] where [username] is the name you entered in the URL.

To test error handling:

    Navigate to any undefined route, such as http://localhost:3000/undefinedRoute.
    You should see a 404 - Not Found response.

Understanding Route Parameters in Express

In Express, route parameters are named URL segments used to capture the values specified at their position in the URL. The values are stored as key-value pairs in req.params object.

    In this script, the route /user/:username includes a route parameter username.
    When a request is made to this route, Express extracts the actual value in place of :username and makes it available in req.params.username.
    This feature is useful for creating dynamic routes where the behavior depends on the specific values passed in the URL.
