import React from 'react';
import Header from './Header/Header';
import { useState } from 'react';
import Login from './Login/Login';
import Welcome from './Welcome/Welcome';
import '../styles/App.scss';

export default function App() {
	const [User, setUser] = useState(null);
	return (
		<div className='App'>
			<Header dark={true}>GFG</Header>
			{User ? <Welcome /> : <Login />}
		</div>
	);
}
