angular.module('evoxs').directive('ngGooglemaps', function() {

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
      positions  : '='
    },
    link : function($scope, $element, $attrs) {
      var start_lat = $scope.startLat;
      var start_lng = $scope.startLng;
      var zoom      = $scope.zoom;
      var positions = $scope.positions;
      var markers   = [];

      $element.addClass('map-canvas');

      var mapElement = $element[0];

      var mapOptions = {
        center: new google.maps.LatLng(start_lat, start_lng),
        zoom: zoom
      };

      var map = new google.maps.Map(mapElement, mapOptions);

      var setMap = function(marker) {
        markers.push(marker);
        marker.setMap(map);
      };

      var createMarker = function(pos) {
        var lat_lng = new google.maps.LatLng(pos.lat, pos.lng);
        setMap(new google.maps.Marker({
          position: lat_lng,
          animation: google.maps.Animation.DROP
        }));
      };

      var updateMarkers = function(positions) {
        if(angular.isArray(positions)) {

        } else {
          var marker;
          var position = positions;
          if(isValidPosition(position)) {
            var mark = markers.length === 1 ? markers[0] : createMarker(position);
          }
        }
      };

      var cleanMarkers = function() {
        angular.forEach(markers, function(marker, i) {
          marker.setMap(null);
          markers.splice(i, 1);
        });
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
});