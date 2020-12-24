import React from 'react';
import Header from './Header/Header';
import { useState } from 'react';
import Login from './Login/Login';
import Welcome from './Welcome/Welcome';
import '../styles/App.scss';

export default function App() {
	const [User, setUser] = useState('');
	const [Error, setError] = useState('');

	function handleLogout(e) {
		e.preventDefault();
		setUser('');
		setError('');
	}
	function handleAuth(username, password) {}
	return (
		<div className='App'>
			<Header dark={true}>GFG</Header>
			{User ? (
				<Welcome User={User.Name} handleLogout={handleLogout} />
			) : (
				<Login handleAuth={handleAuth} errr={Error} />
			)}
		</div>
	);
}
