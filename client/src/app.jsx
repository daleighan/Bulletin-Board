import React, { Component } from 'react';
import Axios from 'axios';

import ShowList from './ShowList.jsx';
import AddShow from './AddShow.jsx';
import MessageBoard from './MessageBoard.jsx'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shows: window.exampleShow,
			messages: window.exampleMessage
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
		const { shows, messages } = this.state;
		return (
			<div id="container">
    		<div id="header">
    			<h2>
        		DIY Show Bulletin Board
    			</h2>
       		<AddShow submitShow={this.submitShow.bind(this)} /> 
       	</div>
    		<div id="content">
        	<ShowList shows={shows} />
    		</div>
    
    		<div id="sidebar">
        	<MessageBoard messages={ messages }/>
    		</div>
    
    		<div id="footer">
        	
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
        "name": "",
        "flyerUrl": "#",
        "date": "",
        "location": "",
        "price": "",
        "ticketLink": "",
        "createdAt": "2017-09-18T22:51:05.160Z",
        "updatedAt": "2017-09-18T22:51:05.160Z"
    }
]

window.exampleMessage = 
[
	{
		user: "",
		message: ""
	}
]