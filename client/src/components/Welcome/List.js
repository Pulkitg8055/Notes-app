import React from 'react';

export default function List({ Note, setCurrentNote, CurrentNote }) {
	return (
		<>
			<h3>Notes List</h3>
			<ul className='list-group'>
				{Note.map((item, key) => (
					<li
						className={
							'list-group-item list-group-item-action' +
							(CurrentNote === key ? ' active' : '')
						}
						key={key}
						onClick={() => setCurrentNote(key)}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}
