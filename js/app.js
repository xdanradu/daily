function App(html, tasks, today, storageKey, store) {
	this.html = html;
	this.today = today;
	this.tasks = tasks;
	this.allDailyTasks = [];
	this.storageKey = storageKey;
	this.store = store;

	this.run = function () {
		this.allDailyTasks = store.get(this.storageKey) || [];
		this.initToday(today.day, today.month, today.year);
		this.showTasks(today.month, today.year);
	}


	this.initToday = function (day, month, year) {
		if (!this.yearIsAlreadyAdded(year)) {
			this.allDailyTasks.push({
				year: year,
				months: []
			});
		}
		if (!this.monthIsAlreadyAdded(month, year)) {
			this.addMonthToYear(month, year);
		}
		if (!this.dayIsAlreadyAdded(day, month, year)) {
			this.addDayToMonth(day, month, year);
		}
	}

	this.addMonthToYear = function (month, year) {
		for (var i = 0; i < this.allDailyTasks.length; i++) {
			if (this.allDailyTasks[i].year == year) {
				this.allDailyTasks[i].months[month] = {
					days: []
				};
			}
		}
	}

	this.addDayToMonth = function (day, month, year) {
		for (var i = 0; i < this.allDailyTasks.length; i++) {
			if (this.allDailyTasks[i].year == year) {
				this.allDailyTasks[i].months[month].days[day] = this.tasks;
			}
		}
	}

	this.showTasks = function (month, year) {
		html.clearTable();
		html.addHeadersToTable();
		this.showCurrentMonth(month, year);
	}

	this.showCurrentMonth = function (month, year) {
		for (var i = 31; i > 0; i--) {
			if (this.allDailyTasks[this.getYearIndex(year)].months[month] && this.allDailyTasks[this.getYearIndex(year)].months[month].days[i]) {
				html.displayDay(i, month, year, this.allDailyTasks[this.getYearIndex(year)].months[month].days[i]);
			}
		}
	}

	this.getYearIndex = function (year) {
		for (var i = 0; i < this.allDailyTasks.length; i++) {
			if (this.allDailyTasks[i].year == year) {
				return i;
			}
		}
		return -1;
	}

	this.yearIsAlreadyAdded = function (year) {
		for (var i = 0; i < this.allDailyTasks.length; i++) {
			if (this.allDailyTasks[i].year == year) return true;
		}
		return false;
	}

	this.monthIsAlreadyAdded = function (month, year) {
		for (var i = 0; i < this.allDailyTasks.length; i++) {
			if (this.allDailyTasks[i].year == year) {
				if (this.allDailyTasks[i].months[month] != undefined) {
					return true;
				}
			}
		}
		return false;
	}

	this.dayIsAlreadyAdded = function (day, month, year) {
		for (var i = 0; i < this.allDailyTasks.length; i++) {
			if (this.allDailyTasks[i].year == year) {
				if (this.allDailyTasks[i].months[month] != undefined) {
					if (this.allDailyTasks[i].months[month].days[day] != undefined) {
						return true;
					}
				}
			}
		}
		return false;
	}

	this.saveToStorage = function () {
		store.set(STORAGE_KEY, app.allDailyTasks);
	}

	this.toggleTask = function (task, day, month, year) {
		var yearIndex = this.getYearIndex(year);
		if (yearIndex >= 0) {
			this.allDailyTasks[yearIndex].months[month].days[day][task] = !this.allDailyTasks[yearIndex].months[month].days[day][task];
		}
	}

	this.getSumFor = function (task, month, year) {
		var sum = 0;
		for (var i = 0; i < this.allDailyTasks[this.getYearIndex(year)].months[month].days.length; i++) {
			if (this.allDailyTasks[this.getYearIndex(year)].months[month].days[i] != undefined) {
				sum += this.allDailyTasks[this.getYearIndex(year)].months[month].days[i][task]==true?1:0;
			}
		}
		return sum;
	}

	this.printStats = function(month, year){
		console.log('STATS')
		for(var i=0;i<KEYS.length;i++){	
			console.log(KEYS[i]+ ': '+app.getSumFor(KEYS[i], month, year));
		}
	}
}