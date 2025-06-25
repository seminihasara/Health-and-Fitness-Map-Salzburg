// Using Leaflet for creating the map and adding controls for interacting with the map

//
//--- Part 1: adding base maps ---
//

//creating the map; defining the location in the center of the map (geographic coords) and the zoom level. These are properties of the leaflet map object
//the map window has been given the id 'map' in the .html file
var map = L.map('map', {
	center: [47.8, 13.05],
	zoom: 14
});


//adding base map/s 

// add open street map as base layer
var osmap = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	

// for using the two base maps in the layer control, I defined a baseMaps variable
var baseMaps = {
	"Open Street Map": osmap
}

//
//---- Part 2: Adding a scale bar
//
L.control.scale({position:'bottomright',imperial:false}).addTo(map);

//
//---- Part 3: adding GeoJSON line features 
//

//---- Part 5: Adding GeoJSON features and interactivity
//


// Add Park layer to the Map

// Highlight function
// Highlight function
function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
        color: '#228B22',  // Darker green on hover
        weight: 5,
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

// Reset highlight
function resetHighlight(e) {
    Park.resetStyle(e.target);
}

// Zoom on click
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

// Parks layer with interactivity and popup
var Park = L.geoJson(Park, {
    style: {
        color: "#32CD32",  // light green
        weight: 3
    },
    onEachFeature: function(feature, layer) {
        // Popup with park name
        if (feature.properties && feature.properties.name) {
            layer.bindPopup("<b>Park:</b> " + feature.properties.name);
        }
        // Add event listeners
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
    }
});
Park.addTo(map);

// Add pharmacy point layer to the Map
//setting the popup content with name and the opening hours

var PharmacyIcon = L.icon({
	iconUrl: 'css/images/Pharmacy.png',
	iconSize: [22, 20]
}); 

var PharmacyLayer = L.geoJson(Pharmacy, {
	pointToLayer: function(feature, latlng) {
		return L.marker(latlng, { icon: PharmacyIcon });
	},
	onEachFeature: function(feature, layer) {
    if (feature.properties) {
        var popupContent = "<b>Pharmacy:</b> " + (feature.properties.name || "No name") + "<br>";
        if (feature.properties.opening_hours) {
            popupContent += "<b>Opening Hours:</b> " + feature.properties.opening_hours;
        }
        layer.bindPopup(popupContent);
    }
}
});
PharmacyLayer.addTo(map);

// Adding fitness center Data 

var fitnessIcon = L.icon({
	iconUrl: 'css/images/fitness.png',
	iconSize: [22, 20]
}); 

var fitnessLayer = L.geoJson(fitness, {
	pointToLayer: function(feature, latlng) {
		return L.marker(latlng, { icon: fitnessIcon });
	},
	onEachFeature: function(feature, layer) {
    var popupContent = "<b>Fitness:</b> " + (feature.properties?.name || "No name");
		layer.bindPopup(popupContent);
        }
    
    });

fitnessLayer.addTo(map);

// Adding Hospital Data 

var hospitalsIcon = L.icon({
	iconUrl: 'css/images/hospital.png',
	iconSize: [22, 20]
}); 

var hospitalsLayer = L.geoJson(hospitals, {
	pointToLayer: function(feature, latlng) {
		return L.marker(latlng, { icon: hospitalsIcon });
	},
	onEachFeature: function(feature, layer) {
    var popupContent = "<b>Hospital:</b> " + (feature.properties?.name || "No name");
		layer.bindPopup(popupContent);
        }
    
    });

hospitalsLayer.addTo(map);

//the variable features lists layers that I want to control with the layer control
var features = {
	"Hospitals": hospitalsLayer,
	"Pharmacy": PharmacyLayer,
	"Parks": Park,
	"Fitness Center": fitnessLayer,
	
}

L.control.layers(baseMaps, features, {position:'topleft'}).addTo(map);
// the legend uses Leaflet's built-in control


