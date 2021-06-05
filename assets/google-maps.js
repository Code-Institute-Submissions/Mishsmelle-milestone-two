  var map;
  var marker;
  var location1 = {
  lat: 44.839168372440774,
    lng: -0.5763232548853524
  };
  var location2 = {
    lat: 47.05400393088885,
    lng: 4.383269628922687
  };
  var location3 = {
   lat: 45.837058438142286,
    lng:  -0.9175872524314757
  };

  function initMap() {
    var myOptions = {
      zoom: 13,
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

