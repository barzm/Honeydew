'use strict';

const config = require('./config');
const list = require('./list');
let db;
function addTask(taskText){
	importDb();
	const today = new Date();
	db.tasks = db.tasks || [];
	db.tasks.push({'text': taskText, 'priority':'!', 'timestamp':today.now()});	
}

function importDb(){
	try{
		db = require(config.dbLocation)
	} catch (error) {
		db = list.newList();
	}
}