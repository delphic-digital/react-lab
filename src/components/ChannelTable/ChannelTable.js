import React from 'react';
import ChannelForm from './ChannelForm/ChannelForm.js'
import ChannelList from './ChannelList/ChannelList.js'

//http://andrewhfarmer.com/react-ajax-best-practices/#1-root-component
//https://github.com/calitek/ReactPatterns

export default class ChannelTable extends React.Component {

	constructor (props) {
		super(props)
		this.init()
	}

	init(){
		this.state = { data: [] };
		this.geoLocate();
	}

	geoLocate(){
		//Some ideas
		//https://github.com/no23reason/react-geolocated/blob/master/src/components/geolocated.js
		let geolocationProvider = (typeof (navigator) !== 'undefined' && navigator.geolocation);
		if (geolocationProvider) {
			let options = {
				enableHighAccuracy: false,
				timeout: 5000,
				maximumAge: 0
			}
			geolocationProvider.getCurrentPosition((position)=>{

				this.setState({
					lat: position.coords.latitude,
					long: position.coords.longitude
				},()=>this.fetchZip());
			},
			(error)=>console.error(error.message),
			options
			);
		}
	}

	handleZipSubmit(e) {
		e.preventDefault();
		console.log('submit zip code: ',this.state.zip)
		this.fetchChannels();
	}

	handleZipChange(zip) {
		this.setState({zip:zip})
	}

	fetchZip(){
		fetch(`${this.props.zipLocateURL}?latlng=${this.state.lat},${this.state.long}`)
			.then(response => response.json())
			.then(data => { console.log(data)
				let zip = data.results[0].address_components.find(x => x['types'][0] == 'postal_code').long_name;
				this.setState({zip:zip})
			})
			.catch(function (error) {
				console.log('Request failed', error);
		});
	}

	fetchChannels() {
		fetch(this.props.channelsURL)
		.then(response => response.json())
		.then(data => this.setState({ data: data }))
		.catch(err => console.error(this.props.url, err.toString()))
	}

	render() {
		return (
			<div className="channel-table">
				<h2>Channels</h2>
				<span>lat:{this.state.lat}</span>, <span>long:</span>{this.state.long}
				<ChannelForm onZipSubmit={zip => this.handleZipSubmit(zip)} onZipChange={zip => this.handleZipChange(zip)} zip={this.state.zip}  />
				<ChannelList data={this.state.data} />
			</div>
		);
	}
}
