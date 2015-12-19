new WOW().init();

var map = L.map('map').setView([46.844, -121.717], 13); //invoke the Leaflet.js library to draw a map in `#map-container` div

var satView = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', { //satellite layer of the map
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'soumontha.mplae266',
    accessToken: 'pk.eyJ1Ijoic291bW9udGhhIiwiYSI6IjY5ZjFkMzVhNTgxMjY0Y2QxY2Q5MzI2NDgzOGEzNjRlIn0.sdDH-b1NZWXdunEkSZs_sQ'
}).addTo(map);
 
var streetView = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', { //street layer of the map
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'soumontha.mpl1b5n7',
    accessToken: 'pk.eyJ1Ijoic291bW9udGhhIiwiYSI6IjY5ZjFkMzVhNTgxMjY0Y2QxY2Q5MzI2NDgzOGEzNjRlIn0.sdDH-b1NZWXdunEkSZs_sQ'
}).addTo(map);

var outdoorView = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', { //outdoor layer of the map
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'soumontha.mpla94ea',
    accessToken: 'pk.eyJ1Ijoic291bW9udGhhIiwiYSI6IjY5ZjFkMzVhNTgxMjY0Y2QxY2Q5MzI2NDgzOGEzNjRlIn0.sdDH-b1NZWXdunEkSZs_sQ'
}).addTo(map);

var layerViews = { //variable for map legend of the different layers
	"Satellite" : satView,
	"Street" : streetView,
	"Outdoor" : outdoorView,
};

var mapLegend = L.control.layers(layerViews).addTo(map); //leaflet library legend for users to view different layers of the map

var fryingPan = L.popup() //a popup marker for glacier
    .setLatLng([46.85238475973365, -121.68336868286133])
	.setContent("I like the glacier's name.")
    .openOn(map);

var nationalPark = L.marker([46.85467392981981, -121.70628547668457]).addTo(map); //a marker for the national park 

var circleGlacier = L.circle([46.84005678194953, -121.69169425964355], 500, { //a circle marker for glacier 
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);
