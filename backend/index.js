const express = require('express');




const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'Hello oministack'})

});

app.listen(3000)
