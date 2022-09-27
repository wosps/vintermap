// Variables --------------------------------------------------------

var mapSW = [0, 8192],
    mapNE = [8192, 0];

let addArr = [];

// Setup Map Object -------------------------------------------------
var map = L.map('map', {
    attributionControl: false,
    zoomControl: false,
}).setView([0, 0], 0);

// Map Tiles --------------------------------------------------------
L.tileLayer('./img/tiles/{z}/{x}/{y}.png', {
    minZoom: 3, 
    maxZoom: 5,
    continuousWorld: false,
    noWrap: true,
    crs: L.CRS.Simple,
}).addTo(map);

map.setMaxBounds(new L.LatLngBounds(
    map.unproject(mapSW, map.getMaxZoom()),
    map.unproject(mapNE, map.getMaxZoom())
));

// Marker Generation ------------------------------------------------

for (var i = 0; i < mapData.length; i++) {
    marker = L.marker([mapData[i][2], mapData[i][3]], {
        icon: mapData[i][0],
    }).addTo(mapData[i][1]);

    marker.bindTooltip(mapData[i][4], {
        className: 'tooltip-custom',
        opacity: 1,
        direction: 'right',
        offset: ([22.5,0]),
    }).update();
}

// Debugging --------------------------------------------------------

var popup = L.popup();

function onMapClick(e) {
    popup.setLatLng(e.latlng).setContent(e.latlng.toString()).openOn(map);
    addArr.push([e.latlng.lat, e.latlng.lng])
    console.log(addArr)
}

map.on('click', onMapClick);