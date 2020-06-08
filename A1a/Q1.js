for(let  i=0;i<10;i++)
{
  console.log(Math.random()*2);
}
dummy click function
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
