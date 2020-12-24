const user = require('express').Router();
const Users = {
	Praveen: 'Hello@123',
	Pulkit: 'Hello',
	Shashi: '123456',
};
user.get('/', (req, res) => {
	res.json(req.session.user);
});

user.post('/login', (req, res) => {
	const { username, password } = req.body;
	if (!Users[username]) {
		req.session.destroy();
		res.status(403).json({
			Error: true,
			Success: false,
			Message: 'User not found',
		});
	} else if (Users[username] && Users[username] !== password) {
		res.status(403).json({
			Error: true,
			Success: false,
			Message: 'Invalid password and username',
		});
	} else {
		res.status(200).json({
			Error: false,
			Success: true,
			Message: {
				Name: username,
			},
		});
	}
});

module.exports = user;
