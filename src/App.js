import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Iframe from 'react-iframe';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			url: "https://www.youtube.com/embed/EqPtz5qN7HM"
		}
	}

	render() {
		return (
			<div className="App">
				<div className="url-input">
					<span>Please enter youtube url </span>
					<input
						className="input-box"
						ref="url"
						placeholder="copy youtube video url here"
						onChange={function(text){this.setState({url: this.refs.url.value})}.bind(this)}
					/>
				</div>
				
				<Iframe url={"https://www.youtube.com/embed/" + this.state.url.substr(this.state.url.length - 11, 11)}
					width="450px"
					height="450px"
					id="myId"
					className="myClassname"
					display="initial"
					position="relative"
					allowFullScreen
				/>
			</div>
		);
	}
}

export default App;


