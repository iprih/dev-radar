const { Router } = require('express');

const routes = Router();


routes.post('/devs', (req, res) => {
    console.log(request.body);
    return res.json({ message: 'Hello oministack'})

});

/*
routes.get('/', (req, res) => {
    return res.json({ message: 'Hello oministack'})

});
*/

module.exports = routes;
