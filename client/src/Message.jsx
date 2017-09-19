import React, { Component } from 'react';

class Message extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.message);
		return (
			<div>Message Board Entry </div>
			)
	}
}

export default Message;