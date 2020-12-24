const express = require('express');
const morgan = require('morgan');
const api = require('./routes/api');
const app = express();
const port = 3100;
const session = require('express-session');
app.use(express.json());
app.use(morgan('dev'));

app.listen(port, () => {
	console.log(`Server started at port ${port}`);
});
app.use('/api', api);

app.use(
	session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false },
	})
);

app.get('/', (req, res) => {
	res.json('Welcome');
});
