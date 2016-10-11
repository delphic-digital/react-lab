import React from 'react';
import {geolocated} from 'react-geolocated';

class ZipLookup extends React.Component {
	constructor (props) {
		super(props)
		this.init()
	}

	init(){}

	//Invoked when a component is receiving new props. This method is not called for the initial render.
	componentWillReceiveProps(newProps,oldProps){
		this.setState({lat:newProps.coords.latitude, long:newProps.coords.longitude })

		//Parent callback
		this.props.onZipRecieve({ zip: 'test' })
	}

	render(){
		let {props} = this;
		return (!props.isGeolocationAvailable ? <div>Your browser does not support Geolocation.</div> : !props.isGeolocationEnabled ? <div>Geolocation is not enabled.</div> : <div>Geolocation is enabled.</div>);
	}

}

//Higher-Order Component: https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e

export default geolocated({
	positionOptions: {
		enableHighAccuracy: true,
	},
	userDecisionTimeout: 5000,
	geolocationProvider: navigator.geolocation
})(ZipLookup);
