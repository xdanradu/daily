$( "#select-month" ).on( "change", function(event) {
	var month = event.target.value;
	app.showTasks(month, YEAR);
});


function toggle(task){
	var selectedDay=$('#'+task.id).attr('day');
	var selectedMonth=$('#'+task.id).attr('month');
	var selectedYear=$('#'+task.id).attr('year');
	app.toggleTask(task.name, selectedDay, selectedMonth, selectedYear)
	app.saveToStorage();
}

var html = new htmlService(KEYS, TODAY);
var app = new App(html, TASKS, TODAY, STORAGE_KEY, new storage());
app.run();
app.printStats(1, 2019);

