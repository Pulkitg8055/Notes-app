import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import NoteContent from './_NoteContent';
import NoteWelcome from './_NoteWelcome';

function Note({ match, Notes }) {
	return (
		<Switch>
			<Route path='/' exact={true} component={NoteWelcome} />

			<Route
				path='/:NoteID'
				render={(rp) => <NoteContent {...rp} Notes={Notes} />}
			/>
		</Switch>
	);
}

export default Note;
