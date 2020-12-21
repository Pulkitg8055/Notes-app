import React from 'react';

export default function Welcome({ User, handleLogout }) {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-12'>
					<p>Welcome, {User}</p>
				</div>
				<button
					className='btn btn-danger btn-sm'
					onClick={handleLogout}
				>
					Log Out
				</button>
			</div>
		</div>
	);
}
