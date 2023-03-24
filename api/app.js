const express = require('express');
const cors = require('cors');
const countryRouter = require('./routers/diary');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/diary', diaryRouter);

module.exports = app
