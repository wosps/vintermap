//Map Generation ------------------------------------------------------------------------------------
var mapMinZoom = 1;
var mapMaxZoom = 5;

var southWest = L.latLng(-300, -50),
    northEast = L.latLng(50, 300),
    bounds = L.latLngBounds(southWest, northEast);

var map = L.map('map', {
    maxZoom: mapMaxZoom,
    minZoom: mapMinZoom,
    maxBounds: bounds,
    attributionControl: false,
    zoomControl: false,
    crs: L.CRS.Simple
})

var mapBounds = new L.LatLngBounds( // ?
    map.unproject([0, 16384], mapMaxZoom),
    map.unproject([16384, 0], mapMaxZoom));

map.fitBounds(mapBounds);

L.tileLayer('img/tiles/{z}/{x}/{y}.png', {
    minZoom: 1,
    maxZoom: 5,
    tms: false,
    noWrap: true
}).addTo(map);

map.addControl(L.control.zoom({
    position: 'topright'
})); // Add zoom controller to top-right.
map.setView(new L.LatLng(-125, 125), 2); // Set view to centre(ish) of map.

// Icon Definitions ---------------------------------------------------------------------------------
var itemIcon = L.Icon.extend({
    options: {
        iconSize: [40, 40]
    }
});

var portIcon = L.Icon.extend({
    options: {
        iconSize: [37.5, 45.5]
    }
})

var iFishPike = new itemIcon({
    iconUrl: 'img/icons/pike-fish.png'
});
var iFishTrout = new itemIcon({
    iconUrl: 'img/icons/trout-fish.png'
});
var iFishRed = new itemIcon({
    iconUrl: 'img/icons/red-fish.png'
});
var iFishPerch = new itemIcon({
    iconUrl: 'img/icons/perch-fish.png'
});
var iFishWhite = new itemIcon({
    iconUrl: 'img/icons/white-fish.png'
});
var iFishRainbow = new itemIcon({
    iconUrl: 'img/icons/rainbow-fish.png'
});
var iFishSalmon = new itemIcon({
    iconUrl: 'img/icons/salmon-fish.png'
});
var iFishHaddock = new itemIcon({
    iconUrl: 'img/icons/haddock-fish.png'
});
var iFishMistyGrouper = new itemIcon({
    iconUrl: 'img/icons/mistygrouper-fish.png'
});
var iFishBlackGrouper = new itemIcon({
    iconUrl: 'img/icons/blackgrouper-fish.png'
});
var iFishSalmonShark = new itemIcon({
    iconUrl: 'img/icons/salmonshark-fish.png'
});
var iFishArcticChar = new itemIcon({
    iconUrl: 'img/icons/arcticchar-fish.png'
});
var iFishCatfish = new itemIcon({
    iconUrl: 'img/icons/catfish-fish.png'
});
var iFishAtlanticCod = new itemIcon({
    iconUrl: 'img/icons/atlanticcod-fish.png'
});

var iPlantWheat = new itemIcon({
    iconUrl: 'img/icons/wheat-plant.png'
});
var iPlantCloudberry = new itemIcon({
    iconUrl: 'img/icons/cloudberry-plant.png'
});
var iPlantRaspberry = new itemIcon({
    iconUrl: 'img/icons/raspberry-plant.png'
});
var iPlantBlackberry = new itemIcon({
    iconUrl: 'img/icons/blackberry-plant.png'
});
var iPlantSugarBeet = new itemIcon({
    iconUrl: 'img/icons/sugarbeet-plant.png'
});
var iPlantKingcup = new itemIcon({
    iconUrl: 'img/icons/kingcup-plant.png'
});
var iPlantHepatica = new itemIcon({
    iconUrl: 'img/icons/hepatica-plant.png'
});
var iPlantWindflower = new itemIcon({
    iconUrl: 'img/icons/windflower-plant.png'
});
var iPlantPoppy = new itemIcon({
    iconUrl: 'img/icons/poppy-plant.png'
});
var iPlantBlackLotus = new itemIcon({
    iconUrl: 'img/icons/blacklotus-plant.png'
});
var iPlantMez = new itemIcon({
    iconUrl: 'img/icons/mez-plant.png'
});

var iPort = new portIcon({
    iconUrl: 'img/icons/boat.png'
});

// Marker Creation Loop -----------------------------------------------------------------------------

var portLayer = L.layerGroup([]);
var fishLayer = L.layerGroup([]);
var featherLayer = L.layerGroup([]);
var plantLayer = L.layerGroup([]);

var overlayMaps = {
    "Ports": portLayer,
    "Fish": fishLayer,
    "Feathers": featherLayer,
    "Plants": plantLayer
};

var markerArray = [
    // Outposts -----------------------------------------
    [iPort, portLayer, -177, 139, "Sgt. Lake Outpost"],
    [iPort, portLayer, -119, 80, "Tim's Outpost"],
    [iPort, portLayer, -91, 186, "Sirola's Secret Shop"],
    [iPort, portLayer, -169, 81, "Jax's Outpost"],
    [iPort, portLayer, -193, 82, "Henry's Fishing Docks"],
    [iPort, portLayer, -214, 163, "Mrs. Snow's Outpost"],
    [iPort, portLayer, -214, 217, "Artur's Outpost"],
    [iPort, portLayer, -179, 242, "Filemon's Outpost"],
    [iPort, portLayer, -117, 243, "Heimo & Rose"],
    [iPort, portLayer, -164, 37, "Diogo's Dock"],
    [iPort, portLayer, -211, 256, "Pix's Island"],

    // Fish ---------------------------------------------
    [iFishRed, fishLayer, -129, 14, "Red Fish"], // ----- Red
    [iFishRed, fishLayer, -194, 32.5, "Red Fish"],
    [iFishRed, fishLayer, -86.5, 43.25, "Red Fish"],
    [iFishRed, fishLayer, -197, 0.5, "Red Fish"],

    [iFishTrout, fishLayer, -131.5, 14, "Trout Fish"], // ----- Trout
    [iFishTrout, fishLayer, -169, 10.5, "Trout Fish"],
    [iFishTrout, fishLayer, -131, 50, "Trout Fish"],
    [iFishTrout, fishLayer, -119, 34, "Trout Fish"],
    [iFishTrout, fishLayer, -114, 17, "Trout Fish"],
    [iFishTrout, fishLayer, -196, 33, "Trout Fish"],
    [iFishTrout, fishLayer, -118, 54, "Trout Fish"],
    [iFishTrout, fishLayer, -88.5, 43.5, "Trout Fish"],
    [iFishTrout, fishLayer, -68.25, 46.5, "Trout Fish"],
    [iFishTrout, fishLayer, -56, 43, "Trout Fish"],
    [iFishTrout, fishLayer, -41, 41.5, "Trout Fish"],
    [iFishTrout, fishLayer, 0, 44, "Trout Fish"],
    [iFishTrout, fishLayer, -42, 11.5, "Trout Fish"],
    [iFishTrout, fishLayer, -92, 15.5, "Trout Fish"],
    [iFishTrout, fishLayer, -148, -1.5, "Trout Fish"],
    [iFishTrout, fishLayer, -188, -1, "Trout Fish"],
    [iFishTrout, fishLayer, -200, 0, "Trout Fish"],
    [iFishTrout, fishLayer, -156.5, 99, "Trout Fish"],
    [iFishTrout, fishLayer, -158.25, 91, "Trout Fish"],
    [iFishTrout, fishLayer, -91, 65, "Trout Fish"],
    [iFishTrout, fishLayer, -80.75, 72, "Trout Fish"],
    [iFishTrout, fishLayer, -158, 82, "Trout Fish"],
    [iFishTrout, fishLayer, -36.75, 101, "Trout Fish"],
    [iFishTrout, fishLayer, -39.25, 178, "Trout Fish"],
    [iFishTrout, fishLayer, -59, 207.25, "Trout Fish"],
    [iFishTrout, fishLayer, -84, 192, "Trout Fish"],
    [iFishTrout, fishLayer, -113, 180.5, "Trout Fish"],
    [iFishTrout, fishLayer, -133, 173, "Trout Fish"],
    [iFishTrout, fishLayer, -145, 167, "Trout Fish"],
    [iFishTrout, fishLayer, -118, 248, "Trout Fish"],
    [iFishTrout, fishLayer, -123, 222.5, "Trout Fish"],
    [iFishTrout, fishLayer, -136, 223.5, "Trout Fish"],
    [iFishTrout, fishLayer, -205, 231.5, "Trout Fish"],

    [iFishPike, fishLayer, -134, 13, "Pike Fish"], // ----- Pike
    [iFishPike, fishLayer, -167.5, 44, "Pike Fish"],
    [iFishPike, fishLayer, -131, 46, "Pike Fish"],
    [iFishPike, fishLayer, -210.5, 10, "Pike Fish"],
    [iFishPike, fishLayer, -116, 54, "Pike Fish"],
    [iFishPike, fishLayer, -54, 42.75, "Pike Fish"],
    [iFishPike, fishLayer, -45, 42, "Pike Fish"],
    [iFishPike, fishLayer, 0, 46, "Pike Fish"],
    [iFishPike, fishLayer, -45, 12, "Pike Fish"],
    [iFishPike, fishLayer, -89, 15.5, "Pike Fish"],
    [iFishPike, fishLayer, -151, -1.5, "Pike Fish"],
    [iFishPike, fishLayer, -212.5, 126, "Pike Fish"],
    [iFishPike, fishLayer, -159, 88.5, "Pike Fish"],
    [iFishPike, fishLayer, -214.5, 138, "Pike Fish"],
    [iFishPike, fishLayer, -218, 149.5, "Pike Fish"],
    [iFishPike, fishLayer, -189, 148, "Pike Fish"],
    [iFishPike, fishLayer, -185, 157, "Pike Fish"],
    [iFishPike, fishLayer, -97, 73, "Pike Fish"],
    [iFishPike, fishLayer, -94.25, 83, "Pike Fish"],
    [iFishPike, fishLayer, -157.25, 105, "Pike Fish"],
    [iFishPike, fishLayer, -157, 80, "Pike Fish"],
    [iFishPike, fishLayer, -128, 76.5, "Pike Fish"],
    [iFishPike, fishLayer, -98.75, 98, "Pike Fish"],
    [iFishPike, fishLayer, -83.5, 103, "Pike Fish"],
    [iFishPike, fishLayer, -42, 65.5, "Pike Fish"],
    [iFishPike, fishLayer, -38, 93, "Pike Fish"],
    [iFishPike, fishLayer, -40.5, 182, "Pike Fish"],
    [iFishPike, fishLayer, -62, 206.25, "Pike Fish"],
    [iFishPike, fishLayer, -113, 178, "Pike Fish"],
    [iFishPike, fishLayer, -136, 172, "Pike Fish"],
    [iFishPike, fishLayer, -142, 167, "Pike Fish"],
    [iFishPike, fishLayer, -151, 168, "Pike Fish"],
    [iFishPike, fishLayer, -166, 150.5, "Pike Fish"],
    [iFishPike, fishLayer, -177, 132, "Pike Fish"],
    [iFishPike, fishLayer, -87, 241.5, "Pike Fish"],
    [iFishPike, fishLayer, -106, 240, "Pike Fish"],
    [iFishPike, fishLayer, -124, 250, "Pike Fish"],
    [iFishPike, fishLayer, -135, 221.5, "Pike Fish"],
    [iFishPike, fishLayer, -155, 249.75, "Pike Fish"],
    [iFishPike, fishLayer, -179, 246.5, "Pike Fish"],
    [iFishPike, fishLayer, -194.5, 246, "Pike Fish"],
    [iFishPike, fishLayer, -220.5, 242, "Pike Fish"],
    [iFishPike, fishLayer, -217.75, 174, "Pike Fish"],
    [iFishPike, fishLayer, -211, 229.25, "Pike Fish"],

    [iFishAtlanticCod, fishLayer, -22, 228, "Atlantic Cod Fish"], // ----- Atlantic Cod

    [iFishCatfish, fishLayer, -65, 204.75, "Catfish Fish"], // ----- Catfish
    [iFishCatfish, fishLayer, -80, 193.5, "Catfish Fish"],
    [iFishCatfish, fishLayer, -133, 224, "Catfish Fish"],

    [iFishWhite, fishLayer, -156, 32, "White Fish"], // ----- White
    [iFishWhite, fishLayer, -131, 126, "White Fish"],

    [iFishPerch, fishLayer, -164, 9, "Perch Fish"], // ----- Perch
    [iFishPerch, fishLayer, -169, 19, "Perch Fish"],
    [iFishPerch, fishLayer, -167.5, 42, "Perch Fish"],
    [iFishPerch, fishLayer, -130.75, 44, "Perch Fish"],
    [iFishPerch, fishLayer, -120, 36, "Perch Fish"],
    [iFishPerch, fishLayer, -186.5, 27, "Perch Fish"],
    [iFishPerch, fishLayer, -192, 32, "Perch Fish"],
    [iFishPerch, fishLayer, -205.5, 78, "Perch Fish"],
    [iFishPerch, fishLayer, -214.5, 77.25, "Perch Fish"],
    [iFishPerch, fishLayer, -215.25, 90.5, "Perch Fish"],
    [iFishPerch, fishLayer, -199, 82, "Perch Fish"],
    [iFishPerch, fishLayer, -214.5, 103, "Perch Fish"],
    [iFishPerch, fishLayer, -213, 128, "Perch Fish"],
    [iFishPerch, fishLayer, -208, 157, "Perch Fish"],
    [iFishPerch, fishLayer, -196, 136, "Perch Fish"],
    [iFishPerch, fishLayer, -159, 104, "Perch Fish"],
    [iFishPerch, fishLayer, -218, 138, "Perch Fish"],
    [iFishPerch, fishLayer, -225.5, 140, "Perch Fish"],
    [iFishPerch, fishLayer, -215, 151.5, "Perch Fish"],
    [iFishPerch, fishLayer, -189, 150, "Perch Fish"],
    [iFishPerch, fishLayer, -181, 156, "Perch Fish"],
    [iFishPerch, fishLayer, -95.5, 76, "Perch Fish"],
    [iFishPerch, fishLayer, -93, 87, "Perch Fish"],
    [iFishPerch, fishLayer, -155, 78.5, "Perch Fish"],
    [iFishPerch, fishLayer, -125, 76.5, "Perch Fish"],
    [iFishPerch, fishLayer, -103, 81, "Perch Fish"],
    [iFishPerch, fishLayer, -99.5, 93, "Perch Fish"],
    [iFishPerch, fishLayer, -82.5, 101, "Perch Fish"],
    [iFishPerch, fishLayer, -68, 64, "Perch Fish"],
    [iFishPerch, fishLayer, -46, 63.75, "Perch Fish"],
    [iFishPerch, fishLayer, -68, 202.75, "Perch Fish"],
    [iFishPerch, fishLayer, -163, 149.5, "Perch Fish"],
    [iFishPerch, fishLayer, -171, 127, "Perch Fish"],
    [iFishPerch, fishLayer, -178, 163.75, "Perch Fish"],
    [iFishPerch, fishLayer, -121, 250, "Perch Fish"],
    [iFishPerch, fishLayer, -132.5, 220.5, "Perch Fish"],
    [iFishPerch, fishLayer, -135.75, 240, "Perch Fish"],
    [iFishPerch, fishLayer, -152, 250, "Perch Fish"],
    [iFishPerch, fishLayer, -176, 247.5, "Perch Fish"],
    [iFishPerch, fishLayer, -176, 235, "Perch Fish"],
    [iFishPerch, fishLayer, -193, 244, "Perch Fish"],
    [iFishPerch, fishLayer, -218, 253, "Perch Fish"],
    [iFishPerch, fishLayer, -214, 222, "Perch Fish"],
    [iFishPerch, fishLayer, -217.5, 208, "Perch Fish"],
    [iFishPerch, fishLayer, -217.25, 170, "Perch Fish"],
    [iFishPerch, fishLayer, -214, 229.5, "Perch Fish"],

    [iFishRainbow, fishLayer, -171, 10.5, "Rainbow Fish"], // ----- Rainbow
    [iFishRainbow, fishLayer, -38, 43.5, "Rainbow Fish"],
    [iFishRainbow, fishLayer, 0, 42, "Rainbow Fish"],
    [iFishRainbow, fishLayer, -39, 11, "Rainbow Fish"],
    [iFishRainbow, fishLayer, -145, -0.5, "Rainbow Fish"],
    [iFishRainbow, fishLayer, -159.75, 86, "Rainbow Fish"],
    [iFishRainbow, fishLayer, -94, 65, "Rainbow Fish"],
    [iFishRainbow, fishLayer, -82, 76, "Rainbow Fish"],
    [iFishRainbow, fishLayer, -36.75, 97, "Rainbow Fish"],
    [iFishRainbow, fishLayer, -37.5, 174, "Rainbow Fish"],
    [iFishRainbow, fishLayer, -96, 186, "Rainbow Fish"],
    [iFishRainbow, fishLayer, -90, 241.5, "Rainbow Fish"],
    [iFishRainbow, fishLayer, -103, 241, "Rainbow Fish"],
    [iFishRainbow, fishLayer, -115, 247, "Rainbow Fish"],

    [iFishSalmon, fishLayer, -169, 21, "Salmon Fish"], // ----- Salmon
    [iFishSalmon, fishLayer, -14, 74, "Salmon Fish"],
    [iFishSalmon, fishLayer, -0.5, 22, "Salmon Fish"],
    [iFishSalmon, fishLayer, -14, 12.5, "Salmon Fish"],
    [iFishSalmon, fishLayer, -205, 83, "Salmon Fish"],
    [iFishSalmon, fishLayer, -93, 188.5, "Salmon Fish"],
    [iFishSalmon, fishLayer, -21.4, 234, "Salmon Fish"],
    [iFishSalmon, fishLayer, -182, 244.5, "Salmon Fish"],
    [iFishSalmon, fishLayer, -217.5, 172, "Salmon Fish"],
    [iFishSalmon, fishLayer, -208, 230.5, "Salmon Fish"],

    [iFishHaddock, fishLayer, -168.5, 23, "Haddock Fish"], // ----- Haddock
    [iFishHaddock, fishLayer, -129, 50, "Haddock Fish"],
    [iFishHaddock, fishLayer, -187, 29, "Haddock Fish"],
    [iFishHaddock, fishLayer, -206.5, 85, "Haddock Fish"],
    [iFishHaddock, fishLayer, -174, 128.5, "Haddock Fish"],
    [iFishHaddock, fishLayer, -135.25, 236, "Haddock Fish"],
    [iFishHaddock, fishLayer, -173, 248.5, "Haddock Fish"],
    [iFishHaddock, fishLayer, -217, 168, "Haddock Fish"],

    [iFishMistyGrouper, fishLayer, -210, 14, "Misty Grouper Fish"], // ----- Misty Grouper
    [iFishMistyGrouper, fishLayer, -198.5, 249, "Misty Grouper Fish"], // ----- Misty Grouper

    [iFishBlackGrouper, fishLayer, -210, 12, "Dark Grouper Fish"], // ----- Dark Grouper
    [iFishBlackGrouper, fishLayer, -196.5, 248, "Dark Grouper Fish"],

    [iFishSalmonShark, fishLayer, -11, 74.5, "Salmon Shark Fish"], // ----- Salmon Shark
    [iFishSalmonShark, fishLayer, 0, 24, "Salmon Shark Fish"],
    [iFishSalmonShark, fishLayer, -11, 12, "Salmon Shark Fish"],

    [iFishArcticChar, fishLayer, -8, 75.5, "Arctic Char Fish"], // ----- Arctic Char
    [iFishArcticChar, fishLayer, -17, 11.75, "Arctic Char Fish"],
    [iFishArcticChar, fishLayer, -21, 231, "Arctic Char Fish"],

    // Feathers ------------------------------------------



    // Plants -----------------------------------------

    [iPlantWheat, plantLayer, -57, 38, "Wheat"], // ----- Wheat
    [iPlantWheat, plantLayer, -75, 28, "Wheat"],
    [iPlantWheat, plantLayer, -87, 22, "Wheat"],
    [iPlantWheat, plantLayer, -89, 32, "Wheat"],
    [iPlantWheat, plantLayer, -115, 49, "Wheat"],
    [iPlantWheat, plantLayer, -136, 46, "Wheat"],
    [iPlantWheat, plantLayer, -127, 31, "Wheat"],
    [iPlantWheat, plantLayer, -130, 23, "Wheat"],
    [iPlantWheat, plantLayer, -152, 22, "Wheat"],
    [iPlantWheat, plantLayer, -195, 28, "Wheat"],
    [iPlantWheat, plantLayer, -130, 83, "Wheat"],
    [iPlantWheat, plantLayer, -116, 96, "Wheat"],
    [iPlantWheat, plantLayer, -115, 127, "Wheat"],
    [iPlantWheat, plantLayer, -115, 137, "Wheat"],
    [iPlantWheat, plantLayer, -124, 142, "Wheat"],
    [iPlantWheat, plantLayer, -210, 175.5, "Wheat"],
    [iPlantWheat, plantLayer, -200, 212, "Wheat"],
    [iPlantWheat, plantLayer, -170, 230, "Wheat"],
    [iPlantWheat, plantLayer, -165, 239, "Wheat"],
    [iPlantWheat, plantLayer, -140, 219, "Wheat"],
    [iPlantWheat, plantLayer, -151, 213, "Wheat"],
    [iPlantWheat, plantLayer, -123, 240, "Wheat"],

    [iPlantCloudberry, plantLayer, -89, 71, "Cloudberry"], // ----- Cloudberry
    [iPlantCloudberry, plantLayer, -96, 122, "Cloudberry"],
    [iPlantCloudberry, plantLayer, -99, 146, "Cloudberry"],
    [iPlantCloudberry, plantLayer, -110, 175, "Cloudberry"],
    [iPlantCloudberry, plantLayer, -149, 220, "Cloudberry"],

    [iPlantRaspberry, plantLayer, -194, 96, "Raspberry"], // ----- Raspberry
    [iPlantRaspberry, plantLayer, -171, 91, "Raspberry"],
    [iPlantRaspberry, plantLayer, -201, 136, "Raspberry"],
    [iPlantRaspberry, plantLayer, -115, 100, "Raspberry"],
    [iPlantRaspberry, plantLayer, -196, 223, "Raspberry"],
    [iPlantRaspberry, plantLayer, -188, 208, "Raspberry"],
    [iPlantRaspberry, plantLayer, -177, 218, "Raspberry"],
    [iPlantRaspberry, plantLayer, -149, 211, "Raspberry"],

    [iPlantBlackberry, plantLayer, -171, 95, "Blackberry"], // ----- Blackberry
    [iPlantBlackberry, plantLayer, -199, 128, "Blackberry"],
    [iPlantBlackberry, plantLayer, -130, 85, "Blackberry"],
    [iPlantBlackberry, plantLayer, -116, 98, "Blackberry"],
    [iPlantBlackberry, plantLayer, -200, 215, "Blackberry"],
    [iPlantBlackberry, plantLayer, -165, 242, "Blackberry"],
    [iPlantBlackberry, plantLayer, -165, 242, "Blackberry"],
    [iPlantBlackberry, plantLayer, -151, 215.5, "Blackberry"],

    [iPlantPoppy, plantLayer, -245, 111, "Poppy"], // ----- Poppy
    [iPlantPoppy, plantLayer, -151, 87, "Poppy"],

    [iPlantBlackLotus, plantLayer, -245, 108, "Black Lotus"], // ----- Black Lotus

    [iPlantSugarBeet, plantLayer, -116, 94, "Sugar Beet"], // ----- Sugar Beet
    [iPlantSugarBeet, plantLayer, -151, 218, "Sugar Beet"],

    [iPlantKingcup, plantLayer, -123, 118, "Kingcup"], // ----- Kingcup
    [iPlantKingcup, plantLayer, -126, 133, "Kingcup"],
    [iPlantKingcup, plantLayer, -99, 160, "Kingcup"],
    [iPlantKingcup, plantLayer, -116, 169, "Kingcup"],
    [iPlantKingcup, plantLayer, -117, 182, "Kingcup"],
    [iPlantKingcup, plantLayer, -132, 167, "Kingcup"],
    [iPlantKingcup, plantLayer, -212, 174, "Kingcup"],
    [iPlantKingcup, plantLayer, -213, 235, "Kingcup"],
    [iPlantKingcup, plantLayer, -125, 239, "Kingcup"],

    [iPlantHepatica, plantLayer, -115, 124, "Hepatica"], // ----- Hepatica
    [iPlantHepatica, plantLayer, -57, 90, "Hepatica"],
    [iPlantHepatica, plantLayer, -99, 162.5, "Hepatica"],
    [iPlantHepatica, plantLayer, -212, 177, "Hepatica"],
    [iPlantHepatica, plantLayer, -125, 241, "Hepatica"],

    [iPlantWindflower, plantLayer, -118, 147, "Windflower"], // ----- Windflower
    [iPlantWindflower, plantLayer, -57, 93, "Windflower"],
    [iPlantWindflower, plantLayer, -99, 165, "Windflower"],
    [iPlantWindflower, plantLayer, -210, 178.5, "Windflower"],
    [iPlantWindflower, plantLayer, -200, 209, "Windflower"],
    [iPlantWindflower, plantLayer, -123, 242, "Windflower"],

    [iPlantMez, plantLayer, -211, 240, "Mez"],



];

for (var i = 0; i < markerArray.length; i++) {
    marker = L.marker([markerArray[i][2], markerArray[i][3]], {
        icon: markerArray[i][0],
        title: markerArray[i][4]
    }).addTo(markerArray[i][1]);
}

// Click Map for Coordinates.
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);