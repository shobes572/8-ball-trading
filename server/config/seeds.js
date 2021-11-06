const db = require('./connection');
const { User, Stock } = require('../models');

db.once('open', async () => {
  await Stock.deleteMany();
  const stocks = await Stock.insertMany([
    {ticker: "APPL"},
    {ticker: "MSFT"},
    {ticker: "AMZN"},
    {ticker: "FB"},
    {ticker: "GOOGL"},
    {ticker: "GOOG"},
    {ticker: "TSLA"},
    {ticker: "NVDA"},
    {ticker: "BRK.B"},
    {ticker: "JPM"}
  ]);

  await User.deleteMany();
  await User.create({
    firstName: 'Super',
    lastName: 'User',
    email: 'test@email.com',
    password: 'testpassword12345',
    stocks: [stocks[0].ticker, stocks[3].ticker, stocks[7].ticker]
  });

  console.log('Seeding Complete');
  process.exit();
});
