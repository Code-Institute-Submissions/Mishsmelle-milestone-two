  var map;
  var marker;
  var location1 = {
    lat: 44.839168372440774,
    lng: -0.5763232548853524
  };
  var location2 = {
    lat: 47.021639992506515,
    lng: 4.835197287766264
  };
  var location3 = {
    lat: 45.82846252931366,
    lng: -0.8758340317909924
  };

  function initMap() {
    var myOptions = {
      zoom: 16,
      center: location1,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map'), myOptions);

    marker = new google.maps.Marker({
      position: location1,
      map: map,
      title: 'Click to zoom'
    });
  }

  function changeCenter(center) {
    map.setCenter(center);
    marker.setPosition(center);
  }