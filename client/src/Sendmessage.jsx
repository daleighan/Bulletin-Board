import React, { Component } from 'react';

class SendMessage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentMessage: '',
			currentShow: 0
		}
	}

	handleChange(e) {
		this.setState({ currentMessage: e.target.value, currentShow: this.props.show })
	}

	render() {
		const { sendMessage } = this.props;
		return (
			<div>
				<textarea defaultValue="enter a message" onChange={this.handleChange.bind(this)} />
				<div className="messagesend" onClick={sendMessage.bind(null, this.state)}>Send</div>
			</div>
			)
		
	}
}

export default SendMessage;