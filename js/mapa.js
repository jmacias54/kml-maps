
       /*

      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          center: {lat: 8.376803, lng: -82.3504809}
        });

       
        var ctaLayer = new google.maps.KmlLayer({
          url: 'http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml',
          map: map
        });
        

        var kmzLayer = new google.maps.KmlLayer('https://cladmin-dev.tmx-internacional.net/portal/pa/cobertura/doc.kml');
        kmzLayer.setMap(map);
      }
*/


      var map;
      var src = 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml';
      var src_panama = 'https://github.com/jmacias54/kml-maps/blob/master/KMZ/32856--COBERTURA_GPON_CLARO_NOV2019.kmz';

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(9.020728,-79.464694),
          zoom: 10,
          mapTypeId: 'terrain'
        });

        var kmlLayer = new google.maps.KmlLayer(src_panama, {
          suppressInfoWindows: true,
          preserveViewport: false,
          map: map
        });
        kmlLayer.addListener('click', function(event) {
          var content = event.featureData.infoWindowHtml;
          var testimonial = document.getElementById('capture');
          testimonial.innerHTML = content;
        });
      }
