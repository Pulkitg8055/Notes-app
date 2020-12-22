import React, { useState } from 'react';
import List from './List';
import WelcomeHeader from './WelcomeHeader';
import Note from './Note';

import { Route } from 'react-router-dom';

export default function Welcome({ User, handleLogout }) {
	const [State, setState] = useState({
		Note: ['Note 1', 'Note 2', 'Note 3'],
	});

	return (
		<div className='container'>
			<WelcomeHeader User={User} handleLogout={handleLogout} />
			<div className='row mt-3'>
				<Route path={['/:NoteID', '/']}>
					<div className='col-3'>
						<List
							Note={State.Note}
							CurrentNote={State.CurrentNote}
							// setCurrentNote={setCurrentNote}
						/>
					</div>
					<div className='col-9'>
						<Note CurrentNote={State.CurrentNote} />
					</div>
				</Route>
			</div>
		</div>
	);
}
