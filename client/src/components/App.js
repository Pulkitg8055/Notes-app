import React from 'react';
import Header from './Header/Header';
import { useState } from 'react';
import Login from './Login/Login';
import Welcome from './Welcome/Welcome';
import '../styles/App.scss';
import { AuthUser } from '../services/User';

export default function App() {
	const [User, setUser] = useState('');
	const [Error, setError] = useState('');

	function handleLogout(e) {
		e.preventDefault();
		setUser('');
		setError('');
	}

	function handleAuth(username, password) {
		AuthUser(username, password)
			.then((res) => {
				setUser(res.data.Message);
				setError(null);
			})
			.catch((error) => {
				setUser(null);
				setError(error.response.data.Message);
			});
	}

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
