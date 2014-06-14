Angular - Google maps
=================
(Work in progress)

Lightweight google maps wrapper focused on markers.

890 bytes minified

Install
-------
With bower:

    $ bower install ng-googlemaps


### Dependencies
```html
<script src="https://maps.googleapis.com/maps/api/js?key=#{YOUR_API_KEY}"></script>
```

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
	