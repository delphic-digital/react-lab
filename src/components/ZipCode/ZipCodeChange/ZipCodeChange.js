import React from 'react';

export default class ZipCodeChange extends React.Component {

	constructor(props) {
		super(props);
	}

	onChangeZipClick(e) {
		e.preventDefault();
		this.props.onZipDestroy();
	}

	render(){
		return (
			<div>Zip: {this.props.zip} <a onClick={this.onChangeZipClick.bind(this)}>(Change Zip)</a></div>
		)
	}

}
