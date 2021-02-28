const router = require('express').Router();
const { MarketDetail, Stock } = require('../../db/models/');

router.get('/:symbol', async (req, res) => {
    const symbol = req.params.symbol;
    let detailQuery;
    const stockQuery = await Stock.findOne({
        where: {
            ticker: symbol,
        },
        raw: true
    });

    if (stockQuery) {
        detailQuery = await MarketDetail.findOne({
            where: {
                stockId: stockQuery.id,
            },
            raw: true
        })
    }


    res.json({ ...stockQuery, ...detailQuery });
});

module.exports = router;