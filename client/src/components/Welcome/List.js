import React from 'react';
import { withRouter, Link } from 'react-router-dom';

function List({ Notes, match }) {
	return (
		<>
			<h3 className='mb-3'>Notes List</h3>
			{/* {console.log(match, 1)} */}
			<div className='list-group'>
				{Notes.map((note, key) => (
					<Link
						to={'/note-' + key}
						className={
							'list-group-item list-group-item-action' +
							(match.params.NoteID &&
							+match.params.NoteID.replace('note-', '') === key
								? ' active'
								: '')
						}
						key={key}
						// onCLick={() => setCurrentNote(key)}
					>
						{note.Title}
					</Link>
				))}
			</div>
		</>
	);
}

export default withRouter(List);
