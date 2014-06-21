angular.module('ngGooglemaps', [])
  .directive('ngGooglemaps', function() {

    var isValidPosition = function(pos) {
      var isValid = true;
      if(!pos) isValid = false;
      if(!pos.lat || !angular.isNumber(pos.lat)) isValid = false;
      if(!pos.lng || !angular.isNumber(pos.lng)) isValid = false;
      return isValid;
    };

    return {
      scope: {
        startLat   : '=',
        startLng   : '=',
        zoom       : '=',
        positions  : '=',
        disableDefaultUi : '='
      },
      link : function($scope, $element, $attrs) {
        var start_lat         = $scope.startLat;
        var start_lng         = $scope.startLng;
        var zoom              = $scope.zoom;
        var positions         = $scope.positions;
        var disableDefaultUi  = $scope.disableDefaultUi
        var markers           = [];

        $element.addClass('map-canvas');

        var mapElement = $element[0];
        var mapOptions = {
          center: new google.maps.LatLng(start_lat, start_lng),
          zoom: zoom,
          disableDefaultUI: disableDefaultUi || false
        };

        var map = new google.maps.Map(mapElement, mapOptions);

        var setMap = function(marker) {
          markers.push(marker);
          marker.setMap(map);
        };

        var createMarker = function(pos) {
          var lat_lng = new google.maps.LatLng(pos.lat, pos.lng);
          var mark = new google.maps.Marker({
            position: lat_lng
          });
          setMap(mark);
          return mark;
        };

        var updateMarkers = function(positions) {
          cleanMarkers();

          var isArray   =   angular.isArray(positions);
          var multiple  =   isArray && positions.length > 1
          
          if(multiple) {
            angular.forEach(positions, function(position){
              createMarker(position);
            });

            var bounds = new google.maps.LatLngBounds();
            angular.forEach(markers, function(marker) {
              bounds.extend(marker.getPosition());
            });
            map.setCenter(bounds.getCenter());
            map.fitBounds(bounds); 

          } else {
            var marker;
            var position = isArray ? positions[0] : positions;
            if(isValidPosition(position)) {
              var mark = createMarker(position);
              map.setCenter(mark.position);
              map.setZoom(zoom);
            }
          }
        };

        var cleanMarkers = function() {
          angular.forEach(markers, function(marker, i) {
            marker.setMap(null);
            console.log("removed", markers);
          });
          markers = [];
        };

        var watch = function(next, error) {
          return function(n,o) {
            if(n) next(n);
            else error();
          };
        };

        $scope.$watch('positions', watch(updateMarkers, cleanMarkers), true);
      }
    };
  })
  .factory('GoogleApi', function($injector) {
    var modules = ['GoogleGeolocation'];
    var api = {};
    angular.forEach(modules, function(m) {
      if($injector.has(m)) {
        var module = $injector.get(m);
        angular.extend(api, module);
      }
    });
    return api;
  });