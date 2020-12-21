import React, { useState } from 'react';
import FormGroup from '../Form/FormGroup';

export default function Loginform({ handleAuth, errr }) {
	const [State, setState] = useState({
		Username: '',
		Password: '',
	});

	function handleChange(e) {
		setState({ ...State, [e.target.name]: [e.target.value] });
	}

	function handleSubmit(e) {
		e.preventDefault();
		handleAuth(State.Username[0], State.Password[0]);
	}

	return (
		<form className='LoginForm' onSubmit={handleSubmit}>
			<h3 className='mb-3'>Login</h3>

			{errr && <div className={'alert alert-danger'}>{errr}</div>}
			{[
				{
					Id: 'Username',
					Type: 'text',
					Desc: 'Put your username in right case',
				},
				{
					Id: 'Password',
					Type: 'password',
					Desc: 'Put your password that you might have forgotten',
				},
			].map((fg, key) => (
				<FormGroup
					{...fg}
					Value={State[fg.Id]}
					Label={fg.Id}
					key={key}
					onChange={handleChange}
				/>
			))}
			<input type='submit' value='Login' className='btn btn-primary' />
		</form>
	);
}
