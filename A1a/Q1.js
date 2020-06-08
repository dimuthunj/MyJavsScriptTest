for(let  i=0;i<10;i++)
{
  console.log(Math.random()*2);
}
let locations = [
	{
		coordinates: [145.133934, -37.910572],
		description: 'Faculty of Information Technology'
	},
	{
		coordinates: [145.1338553, -37.9092552],
		description: 'Faculty of Engineering'
	},
	{
		coordinates: [145.132676, -37.913843],
		description: 'Learning and Teaching Building'
	},
	{
		coordinates: [145.137224, -37.914594],
		description: 'Multi-level Car Parking'
	}
];
let selectedMarker = null;
let sourceAirport = null;
let markerArray=[];
// loop to add markers.
for (let i = 0; i < locations.length; i++)
{
	let markerArray= [];
	let location = [145.3421,-37.4234]
	let marker = new mapboxgl.Marker({ "color": "#FF8C00" });
	marker.setLngLat(location);

	let popup = new mapboxgl.Popup({ offset: 45});
	popup.setText("hello");

	marker.setPopup(popup)
	// adding click event for each marker
	// on click execute the function
	marker.getElement().addEventListener('click', () => {
          console.log("Clicked"+location.description);
					// assign the information about the marker to a global variable
					// once clicked.
					selectedMarker = location; // assigne the location to a global variablr
					//myfunct
					myfnc(location); // calling a function with the location of the marker
					// when a marker is clicked.

        });

	// Display the marker.
	marker.addTo(map);


	// saving all markers to an array.
	markerArray.push(marker); //If you want to remove the markers
	// you will want to save them to an array.
	// use marker.remove() to remove markers from the map.
	// markerArray=[]; reset the markers array.
}

// dummy click function
// This function execute when user select a location.
function selectSource()
{
	sourceAirport =selectedMarker;
	//remove all markers on the map.
	for(let i=0;i<markerArray.length;i++)
	{
		markerArray[i].remove();
	}
	markerArray=[];// reset array
	// add the selected to the map
	let marker = new mapboxgl.Marker({ "color": "#2F269F" });
	console.log(sourceAirport);
	marker.setLngLat(sourceAirport.coordinates);
		marker.addTo(map);

}
