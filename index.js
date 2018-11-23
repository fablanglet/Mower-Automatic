import express from 'express';
import bodyParser from 'body-parser';
import mowersLauncher from './mowersLauncher';

const config = {
  port: 3000,
};

const app = express();
app.use(bodyParser.json());

app.get('/launch', (req, res) => {
  const results = mowersLauncher.launchMower();
  res.status(200).send(results);
});

// Export the app object so that a server can be spawned automatically for the tests
module.exports = app;

// Start the backend
app.listen(config.port, () => console.log('info', `Listening on port ${config.port}`));