function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: { lat: 46.2276, lng: 2.2137 },
    });
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    const markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
    });
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
  }
  const locations = [
    //Bordeaux
    { lat: 44.839168372440774, lng: -0.5763232548853524  },
    //hotels
    { lat:44.83858018806471, lng:-0.5797125306494817 },
    { lat: 44.844544375552296,  lng: -0.5592848268138768 },
    { lat: 44.84664072704814, lng: -0.5841927859625233 },
//restaurants
    { lat: 44.84160106024529, lng:-0.5905362102719739  },
    { lat: 44.83268452465521, lng: -0.5960722896728019 },
    { lat: 44.85121598219748, lng:-0.5621262524165621 },
//bars
    { lat:44.84015795462957, lng: -0.5693088475981463 },
    { lat: 44.84381629264415, lng: -0.5707657657040709 },
    { lat: 44.84168811583788, lng: -0.5818405341746097 },

    //Champagne
    { lat: 45.837058438142286, lng: -0.9175872524314757 },
    //hotels
    { lat: 45.81055048376134, lng: -0.9574634341748279 },
    { lat: 45.8229823746349, lng: -0.7842571216910094 },
    { lat: 45.894264124086526, lng: -0.9171545608193644 },
//restaurants
    { lat: 45.893173559289274, lng: -0.9159314928926761  },
    { lat: 445.906254644006744, lng: -0.9617650804902288 },
    { lat: 45.92566153241454, lng: -0.9585893450199864 },
//bars
    { lat: 45.91455297834956, lng:  -0.8887231688426446 },
    { lat: 45.875545373339015, lng: -0.9633100370491485 },
    { lat: 45.875844157413205, lng:  -0.9634816984259185 },

    //Burgundy
    { lat:47.05400393088885, lng: 4.383269628922687 },
    //hotels
    { lat: 47.20587657765813, lng: 4.62156830021535 },
    { lat: 47.09099746469766, lng: 4.24322662581458 },
    { lat: 46.94962744536695, lng: 4.7334915178692984 },
//restaurants
    { lat: 47.03193983763646,  lng: 4.830028016452519 },
    { lat: 447.19315944926542, lng: 4.9508776256985 },
    { lat: 47.087604098946564, lng: 4.2422594623925205 },
//bars
    { lat: 46.91991803654484, lng:  4.749970749930295 },
    { lat: 47.032826031331396, lng: 4.835801438315226 },
    { lat: 47.03445061959454, lng:  4.836208086082757 },
  ];