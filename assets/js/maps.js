function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: {
        lat: 10.3610531,
        lng: 123.9810976
      }
    });
  
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    const locations = [
      {
        lat: 10.361283,
        lng: 123.9811347
      }
    ];
  
    const markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
    });
  
    new MarkerClusterer(map, markers, {
      imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
  }
  