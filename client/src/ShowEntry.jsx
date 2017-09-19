import React, { Component } from 'react';
import MessageBoard from './MessageBoard.jsx';

class ShowEntry extends Component {
	constructor(props) {
		super(props);
	}

	render() {
	  const { messages, sendMessage } = this.props;
		const { date, flyerUrl, location, name, price } = this.props.show;
		return(
			<div>
				<div className="show-name">
					{name}
				</div>
			
				<img className="flyer" src={flyerUrl} alt="no flyer available" />
			
				<span className="date-location-price">
					{date} - {location} - ${price}
				</span>
				<MessageBoard messages={messages} sendMessage={sendMessage} />
			</div>
		)
	}
}

export default ShowEntry;