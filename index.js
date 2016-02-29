var cli = require('cli');
var fs = require('fs');
cli.parse({
		add: ['a', 'add task'],
		delete: ['d', 'delete task'],
		complete: ['c', 'mark task as complete']
});

cli.main(function(args, options){
	console.log(options);
	console.log(args);
	var task = args[0]
	var description = args[1]
	fetchTaskList(function(taskList){
		if(options.add){
			if(options.delete || options.complete){
				return console.error("Add cant be used with delete or complete");
			}else{
				return taskList.push({name:task, description: description});
			}
		}else if(options.delete){
			if(options.complete){
				return console.error("Delete cant be used with add or complete");
			}else{
				return taskList.splice(task, 1);
			}
		}
	
});
