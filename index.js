const corsAnywhere = require('cors-anywhere');

// Define the host and port for the proxy server
const host = 'localhost';
const port = 8080;

// Start the CORS Anywhere server
corsAnywhere.createServer().listen(port, host, () => {
  console.log(`CORS Anywhere proxy running at http://${host}:${port}/`);
});
