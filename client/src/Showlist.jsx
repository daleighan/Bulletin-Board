import React, { Component } from 'react';

class ShowList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.shows)
		return (
			<div>Show List Here </div>
			)
	}
}

export default ShowList;