// Create web server
// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());
// Create new comment
app.post('/comments', (req, res) => {
    const { body } = req;
    console.log('body', body);
    res.json({
        message: 'New comment created!'
    });
});
// Get all comments
app.get('/comments', (req, res) => {
    res.json({
        message: 'Show all comments!'
    });
});
// Get a comment
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `Show comment ${id}!`
    });
});
// Update a comment
app.put('/comments/:id', (req, res) => {
    const { id } = req.params;
    const { body } = req;
    console.log('body', body);
    res.json({
        message: `Update comment ${id}!`
    });
});
// Delete a comment
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `Delete comment ${id}!`
    });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));