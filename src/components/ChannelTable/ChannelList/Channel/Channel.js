import React from 'react';

export default class Channel extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div className="channel">
				<span className="channel__logo"><img src={this.props.logo}/></span>
				<span className="channel__sign">{this.props.sign}</span>
				<span className="channel__number">{this.props.number}</span>
			</div>
		);
	}

}
