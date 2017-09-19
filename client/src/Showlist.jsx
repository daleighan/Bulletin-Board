import React, { Component } from 'react';
import ShowEntry from './ShowEntry.jsx';

class ShowList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { shows, messages, sendMessage } = this.props;
		return (
			<div>
				{shows.map((show) => {
					return <ShowEntry key={show.id} show={show} messages={messages} sendMessage={sendMessage} /> 
				})}
			</div>
			)
	}
}

export default ShowList;