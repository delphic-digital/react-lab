import React from 'react';
import {geolocated} from 'react-geolocated';
import ChannelForm from './ChannelForm/ChannelForm.js'
import ChannelList from './ChannelList/ChannelList.js'

class ChannelTable extends React.Component {

	constructor (props) {
		super(props)
		this.init()
	}

	init(){
		this.state = { data: [] };
	}

	loadChannels() {
		fetch(this.props.url)
		.then(response => response.json())
		.then(data => this.setState({ data: data }))
		.catch(err => console.error(this.props.url, err.toString()))
  }

	handleZipSubmit(zip) {
		//let data = this.state.data;\
		console.log('submit zip code: ',zip)
		this.loadChannels()
	}

	componentDidMount() {
		//this.loadChannels()
	}

	render() {
		return (
		<div className="channel-table">
			<h2>Channels</h2>
			<ChannelForm onZipSubmit={zip => this.handleZipSubmit(zip)} />
			<ChannelList data={this.state.data} />
		</div>
		);
	}
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
  geolocationProvider: navigator.geolocation
})(ChannelTable);
