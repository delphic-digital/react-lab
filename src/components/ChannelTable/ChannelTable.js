import React from 'react';
import ZipLookup from './ZipLookup/ZipLookup.js'
import ChannelForm from './ChannelForm/ChannelForm.js'
import ChannelList from './ChannelList/ChannelList.js'

export default class ChannelTable extends React.Component {

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

	//Recieves reverse geolocated zip code
	handleZipLookup(zip) {
		console.log('geo recieved zip: ', zip)
	}

	handleZipSubmit(zip) {
		console.log('submit zip code: ',zip)
		//this.loadChannels()
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="channel-table">
				<h2>Channels</h2>
				<ZipLookup onZipRecieve={zip => this.handleZipLookup(zip)} url="https://maps.googleapis.com/maps/api/geocode/json" />
				<ChannelForm onZipSubmit={zip => this.handleZipSubmit(zip)} />
				<ChannelList data={this.state.data} />
			</div>
		);
	}
}
