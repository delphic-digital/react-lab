import React from 'react';
import PubSub from 'pubsub-js';
import ChannelList from './ChannelList/ChannelList.js'

//http://andrewhfarmer.com/react-ajax-best-practices/#1-root-component
//https://github.com/calitek/ReactPatterns

export default class ChannelTable extends React.Component {

	constructor (props) {
		super(props)
		this.init()
	}

	init(){
		this.state = {channels:[]};
	}

	componentWillMount(){
		// when React renders me, I subscribe to the topic 'zip'
		// .subscribe returns a unique token necessary to unsubscribe
		this.pubsub_token = PubSub.subscribe('zip', (topic, zip) => this.setState({ zip: zip },()=>this.fetchChannels()));
	}

	componentWillUnmount(){
		// React removed me from the DOM, I have to unsubscribe from the pubsub using my token
		pubsub.unsubscribe(this.pubsub_token);
	}

	fetchChannels() { console.log('fetch channels for zip', this.state.zip)
		fetch(this.props.channelsURL)
		.then(response => response.json())
		.then(data => this.setState({ channels: data }))
		.catch(err => console.error(this.props.url, err.toString()))
	}

	render() {
		return (
			<div className="channel-table">
				<h2>Channels</h2>
				<ChannelList data={this.state.channels} />
			</div>
		);
	}
}
