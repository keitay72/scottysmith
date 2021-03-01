const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:symbol', async (req, res) => {
    const symbol = req.params.symbol;
    const perPage = 3;
    const config = {
        method: 'get',
        url: `https://api.polygon.io/v1/meta/symbols/${symbol}/news?perpage=${perPage}&page=1&apiKey=${process.env.POLYGON_API_KEY_ID}`,
        headers: {}
    };

    axios(config)
        .then(function (response) {
            res.json(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

});

module.exports = router;


