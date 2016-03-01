'use strict';
const denodeify = require('denodeify');
const fs = denodeify(require('gracfule-fs'));
const path = denodeify(require('path'));
const chalk = require('chalk');
const config = require('./config.json');
const newList = (name) =>{
	fs.mkdir(homeDir)
	.then(() => {
		fs.write(config.dbLocation, JSON.stringify({'name':`${name}`}))
		.then(() => {
			return require(config.dbLocation);
		})
	})
	.catch((err) => {
		chalk.red(`There was a problem creating your list ${name}`);
		chalk.red(err);
	})
};


const clearList = (name) => {
	const list = require(config.dbLocation);
	list.tasks = {};
	return fs.write(config.dbLocation, JSON.stringify(list));
};

module.exports = {
	'newList' : newList
};