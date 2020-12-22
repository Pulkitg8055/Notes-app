import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

function Note({ match }) {
	return (
		<Switch>
			{console.log(match)}
			<Route path='/' exact={true}>
				Select somthing from left
			</Route>

			<Route path='/:NoteID'>
				<pre className='border rounded p-1 bg-light'>
					{JSON.stringify(match, null, 2)}
				</pre>
			</Route>
		</Switch>
	);
}

export default withRouter(Note);
