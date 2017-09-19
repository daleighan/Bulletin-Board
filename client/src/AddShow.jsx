import React, { Component } from 'react';

class AddShow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: '',
			flyerUrl: '',
			location: '',
			name: '',
			price: '',
			ticketlink: ''
		}
	}

	render() {
		return (
			<div>
				<div> Bands: <input type="text" name="showname" /> </div>
				<div> Flyer Url: <input type="text" name="flyer" /></div>
				<div> Date: <input type="date" name="date" /> </div>
				<div> Location: <input type="text" name="location" /> </div>
				<div> Price: <input type="text" name="price" /> </div>
				<div> Link to Buy Tickets: <input type="text" name="ticketlink" /> </div>
				<div> Click to Submit! </div>
			</div>
			)
	}
}

export default AddShow;