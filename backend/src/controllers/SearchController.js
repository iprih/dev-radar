const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')


module.exports = {
    async index(req, res) {
        const { latitude, longitude, techs } = req.body;

        const techsArray = parseStringAsArray(techs);
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        typo: 'Point',
                        coordinates: [ longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        });

        return res.json({ devs });
    } 
}

//async update(){}
//async destroy(){}