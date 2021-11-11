import Alpaca from '@alpacahq/alpaca-trade-api';
require('dotenv').config();

const alpaca = new Alpaca({
    keyId: process.env.HOST_ALPACA_KEY,
    secretKey: process.env.HOST_ALPACA_SECRET,
    paper: true,
    usePolygon: false
});

export default alpaca;
