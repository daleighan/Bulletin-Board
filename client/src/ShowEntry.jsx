import React, { Component } from 'react';

class ShowEntry extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
		<div>
			<div className="show-name">
				Show Name Here
			</div>
			
			<img className="flyer" src="" alt="no flyer available" />
			
			<span className="date-location-price">
				Date, location and price here
			</span>
			<div className="tickets">
				Ticket Link Here
			</div>
		</div>
		)
	}
}

export default ShowEntry;