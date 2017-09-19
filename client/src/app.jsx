import React, { Component } from 'react';
import ShowList from './ShowList.jsx';
import AddShow from './AddShow.jsx';
import Axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shows: window.exampleShow,
			messages: window.exampleMessages
		}
	}

	getShows() {
		Axios.get('/shows')
		.then((response) => this.setState({ shows: response.data }))
		.catch((err) => console.log(err));
	}

	submitShow(showObject) {
		Axios.post('/shows', showObject)
		.then((response) => console.log('post successful'))
		.catch((err) => console.log('error', err));
		this.getShows();
	}

	getMessages() {
		Axios.get('/messages')
		.then((response) => this.setState({ messages: response.data }))
		.catch((err) => console.log(err));
	}

	componentDidMount() {
		this.getShows();
		this.getMessages();
	}

	render() {
		const { shows } = this.state;
		return (
			<div id="container">
    		<h2 id="header">
        	DIY Show Bulletin Board
    		</h2>
    
    		<div id="content">
        	<ShowList shows={shows} />
    		</div>
    
    		<div id="sidebar">
        	sidebar content here
    		</div>
    
    		<div id="footer">
        	<AddShow submitShow={this.submitShow.bind(this)} /> 
    		</div>
			</div>
			)
	}
}

export default App;


window.exampleShow =
[
    {
        "id": 1,
        "name": "Damnation AD, Battery",
        "flyerUrl": "http://hardcoreshowflyers.net/wp-content/uploads/2011/10/10041196.jpg",
        "date": "7/11/2017",
        "location": "Fort Reno",
        "price": 7,
        "ticketLink": "",
        "createdAt": "2017-09-18T22:51:05.160Z",
        "updatedAt": "2017-09-18T22:51:05.160Z"
    }
]

window.exampleMessage = 
[
	{
		user: "Alex",
		message: "hello"
	}
]