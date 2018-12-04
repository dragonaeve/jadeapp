grabIncidents();
	function grabIncidents(callback){
		$.get('/incidents/',function(res,err){
				addIncidentsToMap(res);
			}
	};
	function addIncidentsToMap(incidents_list){
		for (var i = 0; i < incidents_list.length; i++){
			var inc = incidents_list[i];
			L.marker([inc['latitude'], inc['longitude']]).addTo(mymap)
		}
	};