import React from 'react';
import ReactDOM     from 'react-dom';
import ChannelTable from './components/ChannelTable/ChannelTable.js';

ReactDOM.render(
	<ChannelTable channelsURL="http://www.mocky.io/v2/57fbea5d0f000060184fd487" zipLocateURL="https://maps.googleapis.com/maps/api/geocode/json"/>,
	document.getElementById('main')
);
