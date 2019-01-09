var TASKS= {
	water:false, 
	food:false,
	sport:false, 
	planning:false, 
	german:false, 
	guitar:false, 
	swimming:false, 
	climbing:false, 
	reading:false, 
	writing:false, 
	zen:false,
	sleep:false
};

var DAY = new Date().getDate();
var MONTH = new Date().getMonth()+1;
var YEAR = new Date().getFullYear();
var TODAY = { day: DAY, month: MONTH, year: YEAR }; 

var KEYS = [];
for(var key in TASKS) {
  if(TASKS.hasOwnProperty(key)) { //to be safe
    KEYS.push(key);
  }
}

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const STORAGE_KEY='DAILY_TASKS';