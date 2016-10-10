import React from 'react';
import Channel  from './Channel/Channel.js';

export default class ChannelList extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){

		let channelNodes = this.props.data.map((channel)=>{
			return (
				<Channel key={channel._id} logo={channel.logo}  sign={channel.callSign} number={channel.channel}/>
			);
		});

		return (
			<div className="commentList">
				{channelNodes}
			</div>
		);
	}
}
