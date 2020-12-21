import React from 'react';
import LoginForm from './_LoginForm';

export default function Login({ handleAuth }) {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-6'>
					<LoginForm handleAuth={handleAuth} />
				</div>
				<div className='col-6'>Register</div>
			</div>
		</div>
	);
}
