const currentLocation = document.querySelector('#location');
const inputDelivery = document.querySelector('#delivery');

currentLocation.addEventListener('click', function (e) {
    e.preventDefault();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            inputDelivery.value = position.coords.latitude + ',' + position.coords.longitude;
        }, function () {
            alert('Falha ao tentar localizá-lo');
        });
    }
});