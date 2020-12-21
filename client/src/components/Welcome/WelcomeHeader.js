import React from 'react';

export default function WelcomeHeader({ User, handleLogout }) {
	return (
		<div className='row'>
			<div className='col-12'>
				<div className='border rounded p-2'>
					<p className='m-0'>Welcome, {User}</p>
					<button
						className='btn btn-danger btn-sm ml-3'
						onClick={handleLogout}
					>
						Log Out
					</button>
				</div>
			</div>
		</div>
	);
}
