import React, { useState } from 'react';
import List from './List';
import WelcomeHeader from './WelcomeHeader';
import Note from './Note';

import { Route } from 'react-router-dom';

export default function Welcome({ User, handleLogout }) {
	const [State, setState] = useState({
		Notes: [
			{
				NoteID: 'hello',
				Title: 'Hello World',
				Desc:
					'Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World',
			},
			{
				NoteID: 'faq',
				Title: 'Frequently asked question',
				Desc: 'What questions are you asking frequently',
			},
			{
				NoteID: 'gfg',
				Title: 'GeeksforGeeks',
				Desc: 'Hello questions are you asking frequently',
			},
		],
	});

	return (
		<div className='container'>
			<WelcomeHeader User={User} handleLogout={handleLogout} />
			<div className='row mt-3'>
				<Route path={['/:NoteID', '/']}>
					<div className='col-3'>
						<List Notes={State.Notes} />
					</div>
					<div className='col-9'>
						<Note Notes={State.Notes} />
					</div>
				</Route>
			</div>
		</div>
	);
}
