import React from 'react';
import Header from './Header/Header';
import { useState } from 'react';
import Login from './Login/Login';
import Welcome from './Welcome/Welcome';
import '../styles/App.scss';

export default function App() {
	const [User, setUser] = useState(null);

	handleAuth = (username, password) => {
		const Users = {
			Praveen: 'Hello@123',
			Pulkit: 'Hello',
			Shashi: '123456',
		};
		if (Users[username]) {
		} else if (Users[username] && Users[username] !== password) {
		} else {
			setUser({ Name: username });
		}
	};
	return (
		<div className='App'>
			<Header dark={true}>GFG</Header>
			{User ? <Welcome User={User.Name} /> : <Login />}
		</div>
	);
}
