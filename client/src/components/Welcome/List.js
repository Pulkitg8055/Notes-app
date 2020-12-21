import React from 'react';
import { withRouter, Route, Switch, Link } from 'react-router-dom';

function List({ Note }) {
	return (
		<>
			<h3>Notes List</h3>
			<div className='list-group'>
				{Note.map((item, key) => (
					<Link
						to={'/note-' + key}
						className={
							'list-group-item list-group-item-action' +
							(false ? ' active' : '')
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
