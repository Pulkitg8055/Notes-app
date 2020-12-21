import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

function Note({ CurrentNote, ...props }) {
	return (
		<Switch>
			<Route path='/' exact={true}>
				Select somthing from left
			</Route>

			<Route path='/:NoteID'>
				<pre className='border rounded p-1 bg-light'>
					JSON.stringify(props, null, 2)
				</pre>
			</Route>
		</Switch>
	);
}

export default withRouter(Note);
