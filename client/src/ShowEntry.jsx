import React, { Component } from 'react';
import MessageBoard from './MessageBoard.jsx';

class ShowEntry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: []
		}
	}

	filterMessages() {
		let currentId = this.props.show.id
		let belongs = (obj) => {
			if (obj.showId === currentId) {
				return true;
			}
			return false;
		}
		let filtered = this.props.messages.filter(belongs);
		this.setState({ messages: filtered});
	}

	componentDidMount() {
		this.filterMessages.call(this);
	}

	render() {
	  const { messages, sendMessage } = this.props;
		const { date, flyerUrl, location, name, price, id } = this.props.show;
		return(
			<div>
				<div className="show-name">
					{name}
				</div>
			
				<img className="flyer" src={flyerUrl} alt="no flyer available" />
			
				<span className="date-location-price">
					{date} - {location} - ${price}
				</span>
				<MessageBoard messages={this.state.messages} sendMessage={sendMessage} show={id} />
			</div>
		)
	}
}

export default ShowEntry;