Angular - Google maps
=================
(Work in progress)

Lightweight google maps wrapper focused on modules.

Make it as big as you want, Just include the modules you want.

### Dependencies
```html
<script src="https://maps.googleapis.com/maps/api/js?key=#{YOUR_API_KEY}"></script>
```
```js
angular.module('myModule', ['ngGooglemaps']);
```

### Core
    Size googlemaps.js : 3.04 kB
    Size googlemaps.min.js : 1.32 kB
```html
<div
    ng-googlemaps
    start-lat="57.639744",
    start-lng="11.956218",
    zoom="8",
    positions="{lat: 57.639744, lng : 11.956218}"
    positions="[{lat: 57.639744, lng : 11.956218}]",
    disable-default-ui="true"
    >
```

```js
angular.module('myModule')
  .controller($scope, GoogleApi) {
    
});
```


Modules
-------
### Geolocation

https://developers.google.com/maps/documentation/geocoding/

    Size geolocation.js : 458 B
    Size geolocation.min.js : 325 B
```js
GoogleApi.geocode('Street, Postal, City')
  .success(function(result) {
    // do something
  });
```
Optional
```js
angular.module('ngGoogleMaps').constant('GOOGLE_API_KEY', '{YOUR_API_KEY}');
```

Install
-------
With bower:

    $ bower install ng-googlemaps


Building
-------
	$ gulp


TODO
-------
- Implement module for editing
- Implement support to update

	
