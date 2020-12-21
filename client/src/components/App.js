import React from 'react';
import Header from './Header/Header';
import { useState } from 'react';
import Login from './Login/Login';
import Welcome from './Welcome/Welcome';
import '../styles/App.scss';

export default function App() {
	const [User, setUser] = useState('');
	const [Error, setError] = useState('');
	console.log(Error, 'app');

	function handleLogout(e) {
		e.preventDefault();
		setUser('');
		setError('');
	}
	function handleAuth(username, password) {
		const Users = {
			Praveen: 'Hello@123',
			Pulkit: 'Hello',
			Shashi: '123456',
		};
		console.log(Users[username]);
		if (!Users[username]) {
			setUser(null);
			setError('User not found');
		} else if (Users[username] && Users[username] !== password) {
			setUser(null);
			setError('Wrong Password');
		} else {
			setUser({ Name: username });
			setError(null);
		}
	}
	return (
		<div className='App'>
			{/* {console.log(User, 1, handleAuth)} */}
			<Header dark={true}>GFG</Header>
			{User ? (
				<Welcome User={User.Name} handleLogout={handleLogout} />
			) : (
				<Login handleAuth={handleAuth} errr={Error} />
			)}
		</div>
	);
}
