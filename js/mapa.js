function initMap() {


  var infowindow = null;

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 9.02, lng: -79.46 },
    mapTypeId: google.maps.MapTypeId.HYBRID
  });

  map.set('styles', [{
    featureType: "poi.business",
    elementType: "all",
    stylers: [
    { visibility: "off" }
    ]
  }]);

  var kmlLayer = new google.maps.KmlLayer({
    url:
      "https://sites.google.com/site/kmlexamplepanama/home/test/COBERTURA_GPON_CLARO_NOV2019.kml?revision=1",
    suppressInfoWindows: true,
    map: map
  });

  kmlLayer.addListener("click", function(kmlEvent) {
    /*
    var text = kmlEvent.featureData.infoWindowHtml;
    var name = kmlEvent.featureData.name;
    showInContentWindow(text,name);7
    */
   infowindow = new google.maps.InfoWindow();
   infowindow.setContent('<p align="center">Cargando...</p><p align="center"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></p>');

   setTimeout(function() {
    infowindow.setContent(kmlEvent.featureData.name);
    
    }, 5000);
  
    infowindow.setPosition(kmlEvent.latLng);
    infowindow.open(map);

    
  });

  function showInContentWindow(text,name) {
    var sidediv = document.getElementById("content-window");
    var titlediv = document.getElementById("title-window");
    $('#myModal').modal('show'); 
    sidediv.innerHTML = text;
    titlediv.innerHTML = name;
  }

 
}
