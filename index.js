const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there',
        bye: 'buddy'});
});

const PORT = process.env.PORT || 5050;
app.listen(PORT);