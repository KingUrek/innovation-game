require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const userRoutes = require('./routes/user');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.use('/api', apiRoutes);
app.use('/user', userRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`listen to port ${PORT}`));
