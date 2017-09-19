import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { Redirect } from 'react-router';

import ShowList from './ShowList.jsx';
import AddShow from './AddShow.jsx';
import MessageBoard from './MessageBoard.jsx'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shows: window.exampleShow,
			messages: window.exampleMessage,
			user: '',
			renderChild: false,
		}
	}
  
	getShows() {
		Axios.get('/shows')
		.then((response) => this.setState({ shows: response.data.sort(this.sortShowsByDate) }))
		.catch((err) => console.log(err));
	}

	sortShowsByDate(a, b) {
		let date1 = a.date.split('');
		for (let i = 0; i < date1.length; i++){
			if (date1[i] === '/') {
				date1.splice(i, 1);
			}
		}
		let date2 = b.date.split('');
		for (let i = 0; i < date2.length; i++){
			if (date2[i] === '/') {
				date2.splice(i, 1);
			}
		}
		if (date1.join('') < date2.join('')) {
			return -1;
		}
		if (date1.join('') > date2.join('')) {
			return 1;
		}
		return 0;
	}

	submitShow(showObject, e) {
		Axios.post('/shows', showObject)
		.then((response) => console.log('post successful'))
		.catch((err) => console.log('error', err));
		this.getShows();
		ReactDOM.unmountComponentAtNode(document.getElementById('addForm'));
	}

	getMessages() {
		Axios.get('/messages')
		.then((response) => this.setState({ messages: response.data }))
		.catch((err) => console.log(err));
	}

	sendMessage(values, e) {
		if (values.currentMessage.length !== 0){
			Axios.post('/messages', {
				user: this.state.user,
				message: values.currentMessage,
				showId: values.currentShow
			})
			.then((response) => console.log(response))
			.catch((err) => console.log('error', err));
		}	
		this.getMessages()
		this.getShows();
	}

	logOut() {
		console.log('test');
		Axios.get('/logout')
		.then((response) => this.setState())
		.catch((err) => console.log('error', err));
	}

	handleAddClick() {
		ReactDOM.render(<AddShow submitShow={this.submitShow.bind(this)} />, document.getElementById('addForm'))
	}

	componentWillMount() {
		this.getShows();
		this.getMessages();
	}

	componentDidMount() {
		setTimeout(this.getMessages.bind(this), 50);
		this.setState({ user: prompt('What is your username?') })
		setInterval(this.getMessages.bind(this), 10000);
		setInterval(this.getShows.bind(this), 10000);
	}

	render() {
		const { submitShow, sendMessage } = this
		const { shows, messages } = this.state;
  
		return (
			<div id="container">
    		<div id="header">
    			<h2>
        		DIY Show Bulletin Board
        		<div> 
        			<a href='/login' onClick={this.logOut.bind(this)}> Click to Logout </a>
        		</div>
    			</h2>
       	</div>
    		<div id="content">
        	<ShowList shows={shows} messages={messages} sendMessage={sendMessage.bind(this)}/>
    		</div>
    
    		<div id="sidebar">
        	<div onClick={this.handleAddClick.bind(this)} id='submitShows'> click here to add a show </div>
        	<div id="addForm"></div>
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
		user: "A message to test",
		message: "",
		showId: 1
	}
]

//<MessageBoard messages={messages} sendMessage={sendMessage.bind(this)} show='0' />