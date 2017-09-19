import React, { Component } from 'react';

class AddShow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: '',
			flyerUrl: '',
			location: '',
			name: '',
			price: ''
		}
	}

	handleChange(event) {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		})
	}

	render() {
		const { handleChange } = this;
		const { submitShow } = this.props;
		return (
			<div>
			<div className="showadder">
				<div> Bands: 
					<input type="text" name="name" onChange={handleChange.bind(this)} /> 
				</div>
				<div> 
					Flyer Url: <input type="text" name="flyerUrl" onChange={handleChange.bind(this)} />
				</div>
				<div> Date (MM/DD/YYYY): 
					<input type="text" name="date" onChange={handleChange.bind(this)} /> 
				</div>
				<div> Location: 
					<input type="text" name="location" onChange={handleChange.bind(this)} /> 
				</div>
				<div> Price: 
					<input type="text" name="price" onChange={handleChange.bind(this)} /> 
				</div>
				<div className="submitbutton" onClick={submitShow.bind(null, this.state)}> Click to Submit! </div>
			</div>
			</div>
			)
		}
	
}

export default AddShow;