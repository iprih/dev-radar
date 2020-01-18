const { Router } = require('express');
const axios = require('axios')
const routes = Router();


routes.post('/devs', async (req, res) => {
    const { github_username } = req.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

    console.log(apiResponse.data)
    
    return res.json({ message: 'Hello oministack'})

});

/*
routes.get('/', (req, res) => {
    return res.json({ message: 'Hello oministack'})

});
*/

module.exports = routes;
