const express = require('express');
const port = 9000;
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index.ejs');
    res.end();
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});