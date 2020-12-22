import React from 'react';

export default function NoteContent({ match, Notes }) {
	const { Title, Desc } = Notes[+match.params.NoteID.replace('note-', '')];
	return (
		<>
			<h3 className='mb-3'>{Title}</h3>
			<p>{Desc}</p>
		</>
	);
}
