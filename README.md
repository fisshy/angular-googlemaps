Angular - Google maps
=================
(Work in progress)

Lightweight google maps wrapper focused on modules.

### Dependencies
```html
<script src="https://maps.googleapis.com/maps/api/js?key=#{YOUR_API_KEY}"></script>
```
```js
angular.module('myModule', ['ngGooglemaps']);
```

### Core
    Size googlemaps.js : 2.48 kB
    Size googlemaps.min.js : 1.08 kB



### Modules
##### Geolocation
    Size geolocation.js : 458 B
    Size geolocation.min.js : 325 B



Install
-------
With bower:

    $ bower install ng-googlemaps




### Directive
```html

<div
    ng-googlemaps
    start-lat="57.639744",
    start-lng="11.956218",
    zoom="8",
    positions="{lat: 57.639744, lng : 11.956218}"
	positions="[{lat: 57.639744, lng : 11.956218}]"
    >
```


Building
-------
	$ gulp
	