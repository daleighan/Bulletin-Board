import React, { Component } from 'react';
import ShowList from './ShowList.jsx';
import AddShow from './AddShow.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shows: window.example
		}
	}

	componentDidMount() {
		
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
        	<AddShow /> 
    		</div>
			</div>
			)
	}
}

export default App;


window.example =
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
    },
    {
        "id": 2,
        "name": "Judge, Youth of Today",
        "flyerUrl": "http://hardcoreshowflyers.net/wp-content/uploads/2011/10/10041196.jpg",
        "date": "7/19/2017",
        "location": "Fort Reno",
        "price": 7,
        "ticketLink": "",
        "createdAt": "2017-09-18T22:51:05.160Z",
        "updatedAt": "2017-09-18T22:51:05.160Z"
    }
]