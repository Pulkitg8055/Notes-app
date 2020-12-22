import React from 'react';
import { Link } from 'react-router-dom';
export default function WelcomeHeader({ User, handleLogout }) {
	return (
		<div className='row'>
			<div className='col-12'>
				<div className='border rounded p-2'>
					<p className='mb-1'>Welcome, {User}</p>
					<Link to='/' className='btn btn-primary btn-sm mr-2'>
						Home
					</Link>
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
