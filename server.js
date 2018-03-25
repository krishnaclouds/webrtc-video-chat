const app = require('express')();
const port = 9000;

app.get('/', (req, res) => {
    res.render('index.ejs');
    res.end();
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});