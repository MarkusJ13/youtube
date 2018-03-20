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

	componentWillMount(){
		let self = this
		$.ajax({
			type: 'GET',
			url: 'https://api.twitch.tv/kraken/channels/44322889/videos',
			headers: { 'Accept': 'application/vnd.twitchtv.v5+json', 'Client-ID': '4z20fwq83o89l5sxxsh4bzq17skm7d' },
			success: function(result){
				self.setState({videos: result.videos})
			}
		});
	}

	render() {
		let videos = this.state.videos.map((data, index) => {
			return <div className="iframe-container"> 
				<Iframe
					key={"video" + index}
					url={"http://player.twitch.tv/?video=" + data._id + "&autoplay=false"}
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
				<div className="video-channel">
					<Iframe
						url="http://player.twitch.tv/?channel=dallas&muted=false"
						height="480"
						width="640"
						frameBorder="0"
						scrolling="no"
						allowFullScreen
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


