import React, { Component } from 'react';
import Message from './Message.jsx';
import SendMessage from './SendMessage.jsx';

class MessagBoard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.show);
		const { messages, sendMessage, show } = this.props;
		return (
			<div>
				<div> 
				{messages.map((message) => {
					return <Message key={message.id} message={message} />
				})}
				</div>
				<SendMessage sendMessage={sendMessage} />
			</div>
			)
	}	
}

export default MessagBoard;