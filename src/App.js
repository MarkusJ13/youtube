import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Iframe from 'react-iframe';

import $ from 'jquery';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			url: "https://www.youtube.com/embed/EqPtz5qN7HM",
			videos: []
		}
	}

	componentDidMount(){
		let self = this
		$.ajax({
			url: "https://www.googleapis.com/youtube/v3/search?key=AIzaSyB8aPDUD2B2IZrawHJr0SOiwfchKsLpoEA&channelId=UCD0oMMnL78IdahI82FJdohg&part=snippet,id&order=date&maxResults=20",
			success: function(result){
	       		let videos = []
	       		for(let i=0; i<result.items.length; i++){
	       			videos.push(result.items[i].id.videoId)
	       		}
	       		self.setState({videos: videos})
	   		}
	   	});
	}

	render() {
		let videos = this.state.videos.map((data, index) => {
			return <div className="iframe-container"> 
				<Iframe
					key={"video" + index}
					url={"https://www.youtube.com/embed/" + data}
					width="450px"
					height="450px"
					id="myId"
					className="myClassname"
					display="initial"
					position="relative"
					allowFullScreen
				/>
			</div>
		})
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
				<div className="video-container">
					{videos}
				</div>
			</div>
		);
	}
}

export default App;


