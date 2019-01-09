function assertTrue(fnName, arg){
	var status=(arg==true?"PASSED":"FAILED");
	console.log(fnName+" "+status);
}

function assertFalse(fnName, arg){
	var status=(arg==false?"PASSED":"FAILED");
	console.log(fnName+" "+status);
}

function runTests(){

	var initAllDailyTasks = allDailyTasks;

	allDailyTasks = [];
	assertFalse("yearIsAlreadyAdded", yearIsAlreadyAdded(2019));

	allDailyTasks = [{year: 2019}];
	assertTrue("yearIsAlreadyAdded", yearIsAlreadyAdded(2019));



	allDailyTasks = [];
	assertFalse("monthIsAlreadyAdded", monthIsAlreadyAdded(2, 2019));

	allDailyTasks = [{year: 2019, months:[]}];
	allDailyTasks[0].months[7]={days:[]};
	assertTrue("monthIsAlreadyAdded", monthIsAlreadyAdded(7, 2019));



	allDailyTasks = [];
	assertFalse("dayIsAlreadyAdded", dayIsAlreadyAdded(2, 2, 2019));

	allDailyTasks = [{year: 2019, months:[]}];
	allDailyTasks[0].months[7]={days:[]};
	allDailyTasks[0].months[7].days[3]={}
	assertTrue("dayIsAlreadyAdded", dayIsAlreadyAdded(3, 7, 2019));

	allDailyTasks = initAllDailyTasks;
}


//runTests();