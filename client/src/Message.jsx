import React, { Component } from 'react';
import Timestamp from 'react-timestamp';

class Message extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { message, user, createdAt } = this.props.message;
		return (
			<div> 
				<div>
					<span className="user">{user}: </span><span className="message">{message}</span>
				</div>
				<Timestamp className="time" time={createdAt} format="full" />
			</div>
			)
	}
}

export default Message;