require('dotenv').config();
const express = require('express');
const apiRoutes = require('./routes/api');

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/api', apiRoutes);

app.listen(PORT, () => console.log(`listen to port ${PORT}`));
