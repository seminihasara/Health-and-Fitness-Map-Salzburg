// Using Leaflet for creating the Healthcare Facilities  map for Salzburg and adding controls for interacting with the map

//
//adding base maps 
//

//creating the map; defining the location in the center of the map (geographic coords) and the zoom level. These are properties of the leaflet map object
//the map window has been given the id 'map' in the .html file
var map = L.map('map', {
	center: [47.8, 13.05],
	zoom: 14
});


//adding base maps 

// Here i have select the Cartocdn as a the base map for my map
var osmap = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	


// for using the two base maps in the layer control, I defined a baseMaps variable
var baseMaps = {
	"Open Street Map": osmap
}


// Adding a scale bar

L.control.scale({position:'bottomleft',imperial:false}).addTo(map);


// Adding GeoJSON features and interactivity

// Adding the daa on the dentists 

var DentistsIcon = L.icon({
	iconUrl: 'css/images/Dentists.png',
	iconSize: [22, 20]
}); 

var DentistsLayer = L.geoJson(Dentists, {
	pointToLayer: function(feature, latlng) {
		return L.marker(latlng, { icon: DentistsIcon });
	},
    // here i have select the name of the dentist and the opening Hours as the suitable attribute in the pop up content.
	onEachFeature: function(feature, layer) {
    if (feature.properties) {
        var popupContent = "<b>Dentists:</b> " + (feature.properties.name || "No name") + "<br>";
        if (feature.properties.opening_hours) {
            popupContent += "<b>Opening Hours:</b> " + feature.properties.opening_hours;
        }
        layer.bindPopup(popupContent);
    }
}
});
DentistsLayer.addTo(map);

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

// Adding data on Doctors (HausArzt)


var DoctorsIcon = L.icon({
	iconUrl: 'css/images/Doctors.png',
	iconSize: [22, 20]
}); 

var DoctorsLayer = L.geoJson(Doctors, {
	pointToLayer: function(feature, latlng) {
		return L.marker(latlng, { icon: DoctorsIcon });
	},

    	// Here we customize which attributes need to be shown in the pop up of the Doctors Layers. 
        // Here i have select the name, helathcare speciality , opening hours website and the email
	onEachFeature: function(feature, layer) {
		if (feature.properties) {
			var popupContent = "<b>Doctor Name:</b> " + (feature.properties.name || "No name") + "<br>";
			
		

			if (feature.properties["healthcare:speciality"]) {
				popupContent += "<b>Specialty:</b> " + feature.properties["healthcare:speciality"] + "<br>";
			}
		
			if (feature.properties.opening_hours) {
				popupContent += "<b>Opening Hours:</b> " + feature.properties.opening_hours;
			}
			
            if (feature.properties.email) {
				popupContent += "<b>E mail:</b> " + feature.properties.email;
			}

            if (feature.properties.website) {
				popupContent += "<b>Web Site:</b> " + feature.properties.website;
			}
			layer.bindPopup(popupContent);
		}
	}
});
DoctorsLayer.addTo(map);


// Adding Hospital Data and on the pop up it will display the name

var hospitalsIcon = L.icon({
	iconUrl: 'css/images/hospital.png',
	iconSize: [22, 20]
}); 

var hospitalsLayer = L.geoJson(hospitals, {
	pointToLayer: function(feature, latlng) {
		return L.marker(latlng, { icon: hospitalsIcon });
	},
	onEachFeature: function(feature, layer) {
		var name = feature.properties?.name || "No name";
		var popupContent = "<b>Hospital:</b> " + name;
		layer.bindPopup(popupContent);

		
		
	}
});
hospitalsLayer.addTo(map);

 
// Prepare icon HTML labels for overlay layers . Here i want to diplay the icon of the each item on the layer control.
var iconHtmlDentists = '<img src="css/images/Dentists.png" style="width:20px; height:18px; vertical-align:middle; margin-right:6px;"> Dentists';
var iconHtmlPharmacy = '<img src="css/images/Pharmacy.png" style="width:20px; height:18px; vertical-align:middle; margin-right:6px;"> Pharmacy';
var iconHtmlDoctors = '<img src="css/images/Doctors.png" style="width:20px; height:18px; vertical-align:middle; margin-right:6px;"> Doctors';
var iconHtmlHospitals = '<img src="css/images/hospital.png" style="width:20px; height:18px; vertical-align:middle; margin-right:6px;"> Hospitals';

// Define the overlay maps with icons in labels
var overlayMaps = {};
overlayMaps[iconHtmlHospitals] = hospitalsLayer;
overlayMaps[iconHtmlPharmacy] = PharmacyLayer;
overlayMaps[iconHtmlDoctors] = DoctorsLayer;
overlayMaps[iconHtmlDentists] = DentistsLayer;

// Add layer control with icons and always visible 
L.control.layers(baseMaps, overlayMaps, {
    position: 'topleft',
    collapsed: false
    //in order to view the layers at once inthe layer controlled " collapsed : false" function was used. 
}).addTo(map);

