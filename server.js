const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

const quotesRouter = require('./routers/quotes.js')
app.use('/api/quotes', quotesRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});