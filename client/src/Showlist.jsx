import React, { Component } from 'react';
import ShowEntry from './ShowEntry.jsx';

class ShowList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { shows } = this.props;
		console.log(shows);
		return (
			<div>
				{shows.map((show) => {
					return <ShowEntry key={show.id} show={show} /> 
				})}
			</div>
			)
	}
}

export default ShowList;