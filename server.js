//import the Express module
const express = require('express'); 
//create an Express application instance
const app = express(); 
// Set the port based on environment variable or default to 3000
const port = process.env.PORT || 3000; 
// Use body parsing middleware if needed
app.use(express.json()); 

//dynamic Route Handling:
app.get('/user/:username', (req, res) => {
    //extract the username parameter from the URL
  const username = req.params.username; 
  res.send(`Hello ${username}`); // Send a personalized response
});

//error Management (404):
app.use((req, res) => {
  //handle undefined routes with a 404 response
  res.status(404).send('404 - Not Found'); 
});

// Server Launch:
app.listen(port, () => {
    //start the server and log a confirmation message
  console.log(`Server is running on port ${port}`); // Start the server and log a confirmation message
});
