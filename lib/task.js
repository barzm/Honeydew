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

function listTasks(){
	db.tasks.forEach((task, i){
		console.log(`${i+1}. ${task.text}`);
	})
}

function importDb(){
	try{
		db = require(config.dbLocation)
	} catch (error) {
		db = list.newList();
	}
}

module.exports = {
'add': addTask};