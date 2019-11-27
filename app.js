import express from 'express';
import path from 'path';
import cors from 'cors';

import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './router';

const app = express()
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

// Anything that doesn't match the above, send back the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

// Choose the port and start the server
const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`Server is start up on port ${PORT}`)
})


