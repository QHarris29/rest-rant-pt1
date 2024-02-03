require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Rest-Rant world!')
});
//load the places controller
app.use('/places', require('./controllers/places'));

app.get('*', (req, res) => {
    console.log('user requested unknown route: ', req.url);
    res.status(404).send('<h1>404 Page</h1>');
});

app.listen(process.env.PORT, () => {
 console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
