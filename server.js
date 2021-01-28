const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
var uri =process.env.MONGO_URI
console.log(uri)
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
const articleRouter = require('./router/article');
app.use('/article', articleRouter);
const tagRouter = require('./router/tags');
app.use('/tag', tagRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});