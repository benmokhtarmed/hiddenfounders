    /**
    jQuery events
  */
  $(document).ready(function() {
    // initiate Google maps
    initialize();
    // make a .hover event
    $('.venues-listing .venue').hover(
      // mouse in
      function () {
        // first we need to know which <div class="marker"></div> we hovered
        var index = $('.venues-listing .venue').index(this);
        markers[index].setIcon(highlightedIcon());
      },
      // mouse out
      function () {
        // first we need to know which <div class="marker"></div> we hovered
        var index = $('.venues-listing .venue').index(this);
        markers[index].setIcon(normalIcon());
      }

    );
  });
  /**
    Google Maps stuff
  */
    var map;
    var markers = [];
    var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(50.84673465,4.352466166),  // Brussels, Belgium
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    function initialize() {
      map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      for (var i=0; i<markerData.length; i++) {
        markers.push(
          new google.maps.Marker({
            position: new google.maps.LatLng(markerData[i].lat, markerData[i].lng),
            title: markerData[i].title,
            map: map,
            icon: normalIcon()
          })
        );
      }
    }
    // functions that return icons.  Make or find your own markers.
    function normalIcon() {
      return {
        url: 'http://1.bp.blogspot.com/_GZzKwf6g1o8/S6xwK6CSghI/AAAAAAAAA98/_iA3r4Ehclk/s1600/marker-green.png'
      };
    }
    function highlightedIcon() {
      return {
        url: 'http://steeplemedia.com/images/markers/markerGreen.png'
      };
    }
    //google.maps.event.addDomListener(window, 'load', initialize);