function htmlService(keys, today){
	this.keys = keys;
	
	this.clearTable = function(){
		$('#tasks-table').html('');
	}

	this.displayDay = function(day, month, year, tasks){

		var content = '<tr><td class="day">'+day+'</td>';

		for(var i=0;i<keys.length;i++){
			var key = keys[i];
			radio = '<input onclick="toggle(this)" day="'+day+'" month="'+month+'" year="'+year+'" type="checkbox" id="'+day+'-'+month+'-'+year+'-'+keys[i]+'" name="'+keys[i]+'" '+(tasks[keys[i]]?"checked":"") +'>';
			var checkbox='<div class="tick"><label class="container">'+radio+'<span class="checkmark"></span></label></div>';
			content+='<td class="'+(day==today.day&&month==today.month&&year==today.year?'today':'')+'">'+checkbox+'</td>';
		}
		content+='</tr>';
		$('#tasks-table').append(content);

	}

	this.addHeadersToTable = function(){
		var content = '<tr><th>Day</th>';
		for(var i=0;i<keys.length;i++){
			content+='<th>'+capitalizeFirstLetter(keys[i])+'</th>';
		}
		content+='</tr>';
		$('#tasks-table').append(content);
	}
}














