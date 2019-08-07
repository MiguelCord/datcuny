function initialize() {
    var mapProp = {
    center:new google.maps.LatLng(40.7188751, -74.0122238),
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
     };
    
    var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);