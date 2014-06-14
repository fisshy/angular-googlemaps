angular.module('ngGooglemaps')
  .factory('GoogleGeolocation', function($http, $injector) {
    var apiKey;
    if($injector.has('GOOGLE_API_KEY')){
      apiKey = $injector.get('GOOGLE_API_KEY');
    }
    return { 
      geocode : function(address) {
        return $http.get('https://maps.googleapis.com/maps/api/geocode/json?', {
          params : {
            address : address,
            key     : apiKey
          }
        });
      }
    };
});
