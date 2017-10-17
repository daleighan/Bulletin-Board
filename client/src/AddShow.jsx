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
				<div className="formname"> Bands: <br />
					<input type="text" name="name" onChange={handleChange.bind(this)} /> 
				</div>
				<div className="formname"> 
					Flyer Url: <br />
					<input type="text" name="flyerUrl" onChange={handleChange.bind(this)} />
				</div>
				<div className="formname"> Date (MM/DD/YYYY): <br />
					<input type="text" name="date" onChange={handleChange.bind(this)} /> 
				</div>
				<div className="formname"> Location: <br />
					<input type="text" name="location" onChange={handleChange.bind(this)} /> 
				</div>
				<div className="formname"> Price: <br />
					<input type="text" name="price" onChange={handleChange.bind(this)} /> 
				</div>
				<div className="submitbutton" onClick={submitShow.bind(null, this.state)}> Submit! </div>
			</div>
			</div>
			)
		}
	
}

export default AddShow;