import { polyfill } from 'es6-promise';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM     from 'react-dom';
import ZipCode from './components/ZipCode/ZipCode.js';
import ChannelTable from './components/ChannelTable/ChannelTable.js';

//console.info(`React js version : ${React.version}`);

//Testing pass data between separate components with PubSub

ReactDOM.render(
	<ZipCode zipLocateURL="https://maps.googleapis.com/maps/api/geocode/json"/>,
	document.getElementById('zip-form')
);

ReactDOM.render(
	<ChannelTable channelsURL="http://www.mocky.io/v2/57fbea5d0f000060184fd487"/>,
	document.getElementById('main')
);

