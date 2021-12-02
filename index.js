const express = require('express');
const error = require('./middleware/error')
const root = require('./controller/router')

const PORT = 3000;

const app = express();

app.use(express.json());

// here goes our endpoints

app.use(root);

//

app.use(error);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));