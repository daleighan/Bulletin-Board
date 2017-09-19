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
			messages: window.exampleMessage,
			user: ''
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

	sendMessage(value, e) {
		if (value.length > 0) {
			Axios.post('/messages', {
				user: this.state.user,
				message: value
			})
			.then((response) => console.log('post successful'))
			.catch((err) => console.log('error', err));
			this.getMessages();
		}
	}

	componentDidMount() {
		this.getShows();
		this.getMessages();
		this.setState({ user: prompt('What is your username?') })
		setInterval(this.getMessages.bind(this), 5000);
	}

	render() {
		const { submitShow, sendMessage } = this
		const { shows, messages } = this.state;
		return (
			<div id="container">
    		<div id="header">
    			<h2>
        		DIY Show Bulletin Board
    			</h2>
       		<AddShow submitShow={submitShow.bind(this)} /> 
       	</div>
    		<div id="content">
        	<ShowList shows={shows} messages={messages} sendMessage={sendMessage.bind(this)}/>
    		</div>
    
    		<div id="sidebar">
        	<MessageBoard messages={messages} sendMessage={sendMessage.bind(this)}/>
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
		id: 1,
		user: "",
		message: ""
	}
]