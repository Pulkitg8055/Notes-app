import React from 'react';

export default function Welcome({ User }) {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-12'>Welcome, {User}</div>
			</div>
		</div>
	);
}
