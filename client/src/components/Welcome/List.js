import React from 'react';
import { withRouter, Link } from 'react-router-dom';

function List({ Note, match }) {
	return (
		<>
			<h3>Notes List</h3>
			{console.log(match, 1)}
			<div className='list-group'>
				{Note.map((item, key) => (
					<Link
						to={'/note-' + key}
						className={
							'list-group-item list-group-item-action' +
							(+match.params.NoteID.replace('note-', '') === key
								? ' active'
								: '')
						}
						key={key}
						// onCLick={() => setCurrentNote(key)}
					>
						{item}
					</Link>
				))}
			</div>
		</>
	);
}

export default withRouter(List);
