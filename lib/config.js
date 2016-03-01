'use strict';
const home = require('home');
const path = require('path');
module.exports = {
	name: 'HoneyDew List', 
	dbLocation : process.env.honeyDewdbLocation || path.join(home(), 'honeyDewDb.json');
};