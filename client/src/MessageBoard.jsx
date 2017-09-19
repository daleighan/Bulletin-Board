import React, { Component } from 'react';
import Message from './Message.jsx'

class MessagBoard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { messages } = this.props;
		return (
			<div> 
			{messages.map((message) => {
				return <Message key={message.id} message={message} />
			})}
			</div>
			)
	}	
}

export default MessagBoard;