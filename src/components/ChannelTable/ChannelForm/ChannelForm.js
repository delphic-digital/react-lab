import React from 'react';

export default class ChannelForm extends React.Component {

	constructor(props) {
		super(props);
		this.init();
	}

	init(){
		this.state = {zip : ''};
	}

	handleZipChange(e) {
		this.setState({zip: e.target.value});
	}

	handleSubmit(e){
		e.preventDefault();
		let zip = this.state.zip.trim();

		if (!zip) {
			return;
		}

		//Parent callback
		this.props.onZipSubmit({ zip: zip })
	}

	render(){
		return (
			<form className="zip-form" onSubmit={(e) => this.handleSubmit(e)}>
				<input type="text" placeholder="Zipcode" pattern="\d{5}-?(\d{4})?" value={this.state.zip} onChange={ (e) => this.handleZipChange(e) } />
				<input type="submit" value="Submit" />
			</form>
		)
	}

}
