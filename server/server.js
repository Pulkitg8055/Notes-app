const express = require('express');
const morgan = require('morgan');
const api = require('./routes/api');
const app = express();
const port = 3100;

app.use(express.json());
app.use(morgan('dev'));

app.listen(port, () => {
	console.log(`Server started at port ${port}`);
});
app.use('/api', api);

app.get('/', (req, res) => {
	res.json('Welcome');
});
