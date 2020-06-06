function initMap(){
    const loc = {lat: 30.5852, lng: 36.2384}
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
      });
      const marker = new google.maps.Marker({ position:loc, map})
}
