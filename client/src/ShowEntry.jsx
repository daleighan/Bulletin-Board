import React, { Component } from 'react';

class ShowEntry extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { date, flyerUrl, location, name, price, ticketLink } = this.props.show;
		return(
			<div>
				<div className="show-name">
					{name}
				</div>
			
				<img className="flyer" src={flyerUrl} alt="no flyer available" />
			
				<span className="date-location-price">
					{date} - {location} - ${price}
				</span>
				<a href={ticketLink} className="tickets">
					Buy Tickets
				</a>
			</div>
		)
	}
}

export default ShowEntry;