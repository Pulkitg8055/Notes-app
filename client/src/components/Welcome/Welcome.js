import React from 'react';
import List from './List';

export default function Welcome({ User, handleLogout }) {
	return (
		<div className='container'>
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
			<div className='row mt-3'>
				<div className='col-3'>
					<List Notes={['Note 1', 'Note 2', 'Note 3']} />
				</div>
				<div className='col-9'>Right window</div>
			</div>
		</div>
	);
}
