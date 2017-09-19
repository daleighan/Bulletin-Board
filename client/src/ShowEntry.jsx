import React, { Component } from 'react';
import MessageBoard from './MessageBoard.jsx';

class ShowEntry extends Component {
	constructor(props) {
		super(props);
	}

	render() {
	  const { messages, sendMessage } = this.props;
		const { date, flyerUrl, location, name, price, id } = this.props.show;
		console.log(this.props.show.id);
		return(
			<div>
				<div className="show-name">
					{name}
				</div>
			
				<img className="flyer" src={flyerUrl} alt="no flyer available" />
			
				<span className="date-location-price">
					{date} - {location} - ${price}
				</span>
				<MessageBoard messages={messages} sendMessage={sendMessage} show={id} />
			</div>
		)
	}
}

export default ShowEntry;