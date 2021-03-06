
	var mymap = L.map('mapid').setView([37.55, -122.1], 10);
	
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	id: 'mapbox.streets'
	}).addTo(mymap);

	

	L.marker([37.332788, -121.880186]).addTo(mymap)
	.bindPopup("<b>1092347</b><br /><a href='https://www.mercurynews.com/2018/08/22/san-jose-state-student-reportedly-kidnapped-robbed-of-cash/'>link</a>");
	L.marker([37.5715, -122.032]).addTo(mymap)
	.bindPopup("<b>1081536</b><br /><a href='http://www.gunviolencearchive.org/incident/1081536'>link</a>");
	L.marker([37.7393, -122.167]).addTo(mymap)
	.bindPopup("<b>1081409</b><br /><a href='http://www.gunviolencearchive.org/incident/1081409'>link</a>");
	L.marker([37.808, -122.284]).addTo(mymap)
	.bindPopup("<b>1080652</b><br /><a href='http://www.gunviolencearchive.org/incident/1080652'>link</a>");
	L.marker([37.7565, -122.164]).addTo(mymap)
	.bindPopup("<b>1079704</b><br /><a href='http://www.gunviolencearchive.org/incident/1079704'>link</a>");
	L.marker([37.7625, -122.18]).addTo(mymap)
	.bindPopup("<b>1078561</b><br /><a href='http://www.gunviolencearchive.org/incident/1078561'>link</a>");
	L.marker([37.8054, -122.289]).addTo(mymap)
	.bindPopup("<b>1078285</b><br /><a href='http://www.gunviolencearchive.org/incident/1078285'>link</a>");
	L.marker([37.7333, -122.178]).addTo(mymap)
	.bindPopup("<b>1078282</b><br /><a href='http://www.gunviolencearchive.org/incident/1078282'>link</a>");
	L.marker([37.4546, -122.137]).addTo(mymap)
	.bindPopup("<b>1078973</b><br /><a href='http://www.gunviolencearchive.org/incident/1078973'>link</a>");
	L.marker([37.862, -122.295]).addTo(mymap)
	.bindPopup("<b>1077130</b><br /><a href='http://www.gunviolencearchive.org/incident/1077130'>link</a>");
	L.marker([37.9715, -122.517]).addTo(mymap)
	.bindPopup("<b>1077651</b><br /><a href='http://www.gunviolencearchive.org/incident/1077651'>link</a>");
	L.marker([37.5253, -122.04]).addTo(mymap)
	.bindPopup("<b>1077515</b><br /><a href='http://www.gunviolencearchive.org/incident/1077515'>link</a>");
	L.marker([37.7866, -122.241]).addTo(mymap)
	.bindPopup("<b>1076399</b><br /><a href='http://www.gunviolencearchive.org/incident/1076399'>link</a>");
	L.marker([37.6808, -122.138]).addTo(mymap)
	.bindPopup("<b>1076548</b><br /><a href='http://www.gunviolencearchive.org/incident/1076548'>link</a>");
	L.marker([37.7676, -122.169]).addTo(mymap)
	.bindPopup("<b>1075606</b><br /><a href='http://www.gunviolencearchive.org/incident/1075606'>link</a>");
	L.marker([37.807, -122.297]).addTo(mymap)
	.bindPopup("<b>1075508</b><br /><a href='http://www.gunviolencearchive.org/incident/1075508'>link</a>");
	L.marker([37.7163, -122.44]).addTo(mymap)
	.bindPopup("<b>1074886</b><br /><a href='http://www.gunviolencearchive.org/incident/1074886'>link</a>");
	L.marker([37.7737, -122.209]).addTo(mymap)
	.bindPopup("<b>1074821</b><br /><a href='http://www.gunviolencearchive.org/incident/1074821'>link</a>");
	L.marker([37.6819, -122.096]).addTo(mymap)
	.bindPopup("<b>1072447</b><br /><a href='http://www.gunviolencearchive.org/incident/1072447'>link</a>");
	L.marker([37.7922, -122.228]).addTo(mymap)
	.bindPopup("<b>1072489</b><br /><a href='http://www.gunviolencearchive.org/incident/1072489'>link</a>");
	L.marker([37.8443, -122.286]).addTo(mymap)
	.bindPopup("<b>1072491</b><br /><a href='http://www.gunviolencearchive.org/incident/1072491'>link</a>");
	L.marker([37.7985, -122.166]).addTo(mymap)
	.bindPopup("<b>1071902</b><br /><a href='http://www.gunviolencearchive.org/incident/1071902'>link</a>");
	L.marker([37.7543, -122.411]).addTo(mymap)
	.bindPopup("<b>1074349</b><br /><a href='http://www.gunviolencearchive.org/incident/1074349'>link</a>");
	L.polygon([
	[37.454739, -121.925182],
	[37.477629, -121.952991],
	[37.466458, -122.047748],
	[37.501874, -122.106113],
	[37.714020, -122.196750],
	[37.788399, -122.332706],
	[37.896848, -122.313137],
	[37.902808, -122.268161],
	[37.801964, -122.136325],
	[37.797624, -122.047062],
	[37.719452, -121.961231],
	[37.813899, -121.559543],
	[37.542174, -121.557483],
	[37.486620, -121.474399],
	]).addTo(mymap).bindPopup("Alameda County, roughly");
	var popup = L.popup();
	function onMapClick(e) {
	popup
	.setLatLng(e.latlng)
	.setContent("You clicked the map at " + e.latlng.toString())
	.openOn(mymap);
	}
	mymap.on('click', onMapClick);