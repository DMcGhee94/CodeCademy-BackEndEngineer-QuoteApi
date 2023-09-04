const express = require('express');
quotesRouter = express.Router();

const { quotes } = require('../data.js');
const { getRandomElement } = require('../utils.js');

quotesRouter.get('/', (req, res, next) => {
    let response = [];

    if (Object.hasOwn(req.query, 'person') && req.query.person !== '') {
        response = {quotes: quotes.filter((quote) => quote.person === req.query.person)};
    } else {
        response = {quotes: quotes};
    };

    console.log(response);
    
    res.send(response);
});

quotesRouter.get('/random', (req, res, next) => {
    const response = {quote: getRandomElement(quotes)};
    res.send(response);
});

quotesRouter.post('/', (req, res, next) => {
    const person = req.query.person;
    const quote = req.query.quote;

    if (person && quote) {
        quotes.push({quote: quote, person: person});
        res.status(201).send(quotes);
    } else {
        res.status(400).send('Not all variables were populated');
    }
});

module.exports = quotesRouter;