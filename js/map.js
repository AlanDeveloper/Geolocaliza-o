function initMap() {
    let directionsDisplay = new google.maps.DirectionsRenderer;
    
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: { lat: -32.04, lng: -52.12 }
    });
    directionsDisplay.setMap(map);
}