import React, { Component } from 'react';

class SendMessage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentMessage: ''
		}
	}

	handleChange(e) {
		this.setState({ currentMessage: e.target.value })
	}

	render() {
		const { sendMessage } = this.props;
		return (
			<div>
				<textarea defaultValue="enter a message" onChange={this.handleChange.bind(this)} />
				<div className="messagesend" onClick={sendMessage.bind(null, this.state.currentMessage)}>Send</div>
			</div>
			)
		
	}
}

export default SendMessage;