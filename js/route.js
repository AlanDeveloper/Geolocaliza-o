const btnSubmit = document.querySelector('.btn-primary');

btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: { lat: -32.04, lng: -52.12 }
    });
    directionsDisplay.setMap(map);
    directionsService.route({
        origin: document.getElementById('product').value,
        destination: document.getElementById('delivery').value,
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            alert('Preencha os campos!');
        }
    });
});