import { polyfill } from 'es6-promise';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM     from 'react-dom';
import ChannelTable from './components/ChannelTable/ChannelTable.js';

//console.info(`React js version : ${React.version}`);

ReactDOM.render(
	<ChannelTable channelsURL="http://www.mocky.io/v2/57fbea5d0f000060184fd487" zipLocateURL="https://maps.googleapis.com/maps/api/geocode/json"/>,
	document.getElementById('main')
);
