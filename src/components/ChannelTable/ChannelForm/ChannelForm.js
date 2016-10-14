import React from 'react';

export default class ChannelForm extends React.Component {

	constructor(props) {
		super(props);
		this.init();
	}

	init(){

	}

	onZipChange(e) {
		e.preventDefault();
		let zip = e.target.value.trim();
		this.props.onZipChange(zip)
	}

	//react-controlled-inputs.md
	//https://gist.github.com/markerikson/d71cfc81687f11609d2559e8daee10cc

	render(){
		return (
			<form className="zip-form" onSubmit={(e) => this.props.onZipSubmit(e)}>
				<input type="text" placeholder="Zipcode" pattern="\d{5}-?(\d{4})?" value={this.props.zip || ''} onChange={(e) => this.onZipChange(e)} />
				<input type="submit" value="Submit" />
			</form>
		)
	}

}
