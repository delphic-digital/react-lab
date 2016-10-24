import React from 'react';
import PubSub from 'pubsub-js';
import ZipCodeForm from './ZipCodeForm/ZipCodeForm.js'

export default class ZipCode extends React.Component {

	constructor (props) {
		super(props)
		this.init()
	}

	init(){
		this.state = {};
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

	fetchZip(){
		fetch(`${this.props.zipLocateURL}?latlng=${this.state.lat},${this.state.long}`)
			.then(response => response.json())
			.then(data => {
				let zip = data.results[0].address_components.find(x => x['types'][0] == 'postal_code').long_name;
				this.setState({zip:zip})
			})
			.catch(function (error) {
				console.log('Request failed', error);
		});
	}

	handleZipSubmit(e) {
		e.preventDefault();
		console.log('fetch channels in channels component with zip:',this.state.zip);

		//This will publish the zipcode to the global event system. Channels fetch is subscribed to it.
		PubSub.publish('zip', this.state.zip);

		console.info('todo: hide form and replace with change zip button')
	}

	handleZipChange(zip) {
		this.setState({zip:zip})
	}


	render() {
		return (
			<div className="channel-form">
				<span>lat:{this.state.lat}</span>, <span>long:</span>{this.state.long}
				<ZipCodeForm onZipSubmit={zip => this.handleZipSubmit(zip)} onZipChange={zip => this.handleZipChange(zip)} zip={this.state.zip}  />
			</div>
		);
	}

}
