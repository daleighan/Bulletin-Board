import React, { Component } from 'react';
import ShowList from './Showlist.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shows: window.example
		}
	}

	render() {
		const { shows } = this.state;
		return (
			<div id="container">
    		<div id="header">
        	DIY Show Bulletin Board
    		</div>
    
    		<div id="content" shows={shows}>
        	<ShowList />
    		</div>
    
    		<div id="sidebar">
        	sidebar content here
    		</div>
    
    		<div id="footer">
        	footer content here
    		</div>
			</div>
			)
	}
}

export default App;