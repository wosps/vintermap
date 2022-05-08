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

var iPort = new portIcon({
    iconUrl: 'img/icons/boat.png'
});

var iShopMystery = new itemIcon({
    iconUrl: 'img/icons/mystery-shop.png'
});

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
var iPlantCloudberries = new itemIcon({
    iconUrl: 'img/icons/cloudberry-plant.png'
});
var iPlantRaspberries = new itemIcon({
    iconUrl: 'img/icons/raspberry-plant.png'
});
var iPlantBlackberries = new itemIcon({
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
var iPlantMezereon = new itemIcon({
    iconUrl: 'img/icons/mez-plant.png'
});
var iPlantChanterelles = new itemIcon({
    iconUrl: 'img/icons/chanterelles-plant.png'
});

var iFeatherHazelHen = new itemIcon({
    iconUrl: 'img/icons/hazelhen-feather.png'
});
var iFeatherPristineHazelHen = new itemIcon({
    iconUrl: 'img/icons/hazelhen-pristine-feather.png'
});
var iFeatherKiiruna = new itemIcon({
    iconUrl: 'img/icons/kiiruna-feather.png'
});
var iFeatherPristineKiiruna = new itemIcon({
    iconUrl: 'img/icons/kiiruna-pristine-feather.png'
});
var iFeatherPeacock = new itemIcon({
    iconUrl: 'img/icons/peacock-feather.png'
});
var iFeatherPristinePeacock = new itemIcon({
    iconUrl: 'img/icons/peacock-pristine-feather.png'
});
var iFeatherCapercaillie = new itemIcon({
    iconUrl: 'img/icons/capercaillie-feather.png'
});
var iFeatherPristineCapercaillie = new itemIcon({
    iconUrl: 'img/icons/capercaillie-pristine-feather.png'
});

// Marker Creation Loop -----------------------------------------------------------------------------

var portLayer = L.layerGroup([]);
var fishLayer = L.layerGroup([]);
var featherLayer = L.layerGroup([]);
var plantLayer = L.layerGroup([]);
var shopLayer = L.layerGroup([]);

var overlayMaps = {
    "Ports": portLayer,
    "Fish": fishLayer,
    "Feathers": featherLayer,
    "Plants": plantLayer,
    "Shops": shopLayer
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

    // Mystery Shops ------------------------------------

    [iShopMystery, shopLayer, -66.75, 43.75, "Mystery Shop"],
    [iShopMystery, shopLayer, -68, 150, "Mystery Shop"],
    [iShopMystery, shopLayer, -91, 184, "Mystery Shop"],
    [iShopMystery, shopLayer, -97, 139, "Mystery Shop"],
    [iShopMystery, shopLayer, -113, 193, "Mystery Shop"],
    [iShopMystery, shopLayer, -164, 35, "Mystery Shop"],
    [iShopMystery, shopLayer, -210.5, 128.75, "Mystery Shop"],

    // Fish ---------------------------------------------
    [iFishRed, fishLayer, -129, 14, "Redfish"], // ----- Red
    [iFishRed, fishLayer, -194, 32.5, "Redfish"],
    [iFishRed, fishLayer, -86.5, 43.25, "Redfish"],
    [iFishRed, fishLayer, -197, 0.5, "Redfish"],

    [iFishTrout, fishLayer, -131.5, 14, "Trout"], // ----- Trout
    [iFishTrout, fishLayer, -169, 10.5, "Trout"],
    [iFishTrout, fishLayer, -131, 50, "Trout"],
    [iFishTrout, fishLayer, -119, 34, "Trout"],
    [iFishTrout, fishLayer, -114, 17, "Trout"],
    [iFishTrout, fishLayer, -196, 33, "Trout"],
    [iFishTrout, fishLayer, -118, 54, "Trout"],
    [iFishTrout, fishLayer, -88.5, 43.5, "Trout"],
    [iFishTrout, fishLayer, -68.25, 46.5, "Trout"],
    [iFishTrout, fishLayer, -56, 43, "Trout"],
    [iFishTrout, fishLayer, -41, 41.5, "Trout"],
    [iFishTrout, fishLayer, 0, 44, "Trout"],
    [iFishTrout, fishLayer, -42, 11.5, "Trout"],
    [iFishTrout, fishLayer, -92, 15.5, "Trout"],
    [iFishTrout, fishLayer, -148, -1.5, "Trout"],
    [iFishTrout, fishLayer, -188, -1, "Trout"],
    [iFishTrout, fishLayer, -200, 0, "Trout"],
    [iFishTrout, fishLayer, -156.5, 99, "Trout"],
    [iFishTrout, fishLayer, -158.25, 91, "Trout"],
    [iFishTrout, fishLayer, -91, 65, "Trout"],
    [iFishTrout, fishLayer, -80.75, 72, "Trout"],
    [iFishTrout, fishLayer, -158, 82, "Trout"],
    [iFishTrout, fishLayer, -36.75, 101, "Trout"],
    [iFishTrout, fishLayer, -39.25, 178, "Trout"],
    [iFishTrout, fishLayer, -59, 207.25, "Trout"],
    [iFishTrout, fishLayer, -84, 192, "Trout"],
    [iFishTrout, fishLayer, -113, 180.5, "Trout"],
    [iFishTrout, fishLayer, -133, 173, "Trout"],
    [iFishTrout, fishLayer, -145, 167, "Trout"],
    [iFishTrout, fishLayer, -118, 248, "Trout"],
    [iFishTrout, fishLayer, -123, 222.5, "Trout"],
    [iFishTrout, fishLayer, -136, 223.5, "Trout"],
    [iFishTrout, fishLayer, -205, 231.5, "Trout"],

    [iFishPike, fishLayer, -134, 13, "Pike"], // ----- Pike
    [iFishPike, fishLayer, -167.5, 44, "Pike"],
    [iFishPike, fishLayer, -131, 46, "Pike"],
    [iFishPike, fishLayer, -210.5, 10, "Pike"],
    [iFishPike, fishLayer, -116, 54, "Pike"],
    [iFishPike, fishLayer, -54, 42.75, "Pike"],
    [iFishPike, fishLayer, -45, 42, "Pike"],
    [iFishPike, fishLayer, 0, 46, "Pike"],
    [iFishPike, fishLayer, -45, 12, "Pike"],
    [iFishPike, fishLayer, -89, 15.5, "Pike"],
    [iFishPike, fishLayer, -151, -1.5, "Pike"],
    [iFishPike, fishLayer, -212.5, 126, "Pike"],
    [iFishPike, fishLayer, -159, 88.5, "Pike"],
    [iFishPike, fishLayer, -214.5, 138, "Pike"],
    [iFishPike, fishLayer, -218, 149.5, "Pike"],
    [iFishPike, fishLayer, -189, 148, "Pike"],
    [iFishPike, fishLayer, -185, 157, "Pike"],
    [iFishPike, fishLayer, -97, 73, "Pike"],
    [iFishPike, fishLayer, -94.25, 83, "Pike"],
    [iFishPike, fishLayer, -157.25, 105, "Pike"],
    [iFishPike, fishLayer, -157, 80, "Pike"],
    [iFishPike, fishLayer, -128, 76.5, "Pike"],
    [iFishPike, fishLayer, -98.75, 98, "Pike"],
    [iFishPike, fishLayer, -83.5, 103, "Pike"],
    [iFishPike, fishLayer, -42, 65.5, "Pike"],
    [iFishPike, fishLayer, -38, 93, "Pike"],
    [iFishPike, fishLayer, -40.5, 182, "Pike"],
    [iFishPike, fishLayer, -62, 206.25, "Pike"],
    [iFishPike, fishLayer, -113, 178, "Pike"],
    [iFishPike, fishLayer, -136, 172, "Pike"],
    [iFishPike, fishLayer, -142, 167, "Pike"],
    [iFishPike, fishLayer, -151, 168, "Pike"],
    [iFishPike, fishLayer, -166, 150.5, "Pike"],
    [iFishPike, fishLayer, -177, 132, "Pike"],
    [iFishPike, fishLayer, -87, 241.5, "Pike"],
    [iFishPike, fishLayer, -106, 240, "Pike"],
    [iFishPike, fishLayer, -124, 250, "Pike"],
    [iFishPike, fishLayer, -135, 221.5, "Pike"],
    [iFishPike, fishLayer, -155, 249.75, "Pike"],
    [iFishPike, fishLayer, -179, 246.5, "Pike"],
    [iFishPike, fishLayer, -194.5, 246, "Pike"],
    [iFishPike, fishLayer, -220.5, 242, "Pike"],
    [iFishPike, fishLayer, -217.75, 174, "Pike"],
    [iFishPike, fishLayer, -211, 229.25, "Pike"],

    [iFishAtlanticCod, fishLayer, -22, 228, "Cod"], // ----- Atlantic Cod

    [iFishCatfish, fishLayer, -65, 204.75, "Catfish"], // ----- Catfish
    [iFishCatfish, fishLayer, -80, 193.5, "Catfish"],
    [iFishCatfish, fishLayer, -133, 224, "Catfish"],

    [iFishWhite, fishLayer, -156, 32, "Whitefish"], // ----- White
    [iFishWhite, fishLayer, -131, 126, "Whitefish"],

    [iFishPerch, fishLayer, -164, 9, "Perch"], // ----- Perch
    [iFishPerch, fishLayer, -169, 19, "Perch"],
    [iFishPerch, fishLayer, -167.5, 42, "Perch"],
    [iFishPerch, fishLayer, -130.75, 44, "Perch"],
    [iFishPerch, fishLayer, -120, 36, "Perch"],
    [iFishPerch, fishLayer, -186.5, 27, "Perch"],
    [iFishPerch, fishLayer, -192, 32, "Perch"],
    [iFishPerch, fishLayer, -205.5, 78, "Perch"],
    [iFishPerch, fishLayer, -214.5, 77.25, "Perch"],
    [iFishPerch, fishLayer, -215.25, 90.5, "Perch"],
    [iFishPerch, fishLayer, -199, 82, "Perch"],
    [iFishPerch, fishLayer, -214.5, 103, "Perch"],
    [iFishPerch, fishLayer, -213, 128, "Perch"],
    [iFishPerch, fishLayer, -208, 157, "Perch"],
    [iFishPerch, fishLayer, -196, 136, "Perch"],
    [iFishPerch, fishLayer, -159, 104, "Perch"],
    [iFishPerch, fishLayer, -218, 138, "Perch"],
    [iFishPerch, fishLayer, -225.5, 140, "Perch"],
    [iFishPerch, fishLayer, -215, 151.5, "Perch"],
    [iFishPerch, fishLayer, -189, 150, "Perch"],
    [iFishPerch, fishLayer, -181, 156, "Perch"],
    [iFishPerch, fishLayer, -95.5, 76, "Perch"],
    [iFishPerch, fishLayer, -93, 87, "Perch"],
    [iFishPerch, fishLayer, -155, 78.5, "Perch"],
    [iFishPerch, fishLayer, -125, 76.5, "Perch"],
    [iFishPerch, fishLayer, -103, 81, "Perch"],
    [iFishPerch, fishLayer, -99.5, 93, "Perch"],
    [iFishPerch, fishLayer, -82.5, 101, "Perch"],
    [iFishPerch, fishLayer, -68, 64, "Perch"],
    [iFishPerch, fishLayer, -46, 63.75, "Perch"],
    [iFishPerch, fishLayer, -68, 202.75, "Perch"],
    [iFishPerch, fishLayer, -163, 149.5, "Perch"],
    [iFishPerch, fishLayer, -171, 127, "Perch"],
    [iFishPerch, fishLayer, -178, 163.75, "Perch"],
    [iFishPerch, fishLayer, -121, 250, "Perch"],
    [iFishPerch, fishLayer, -132.5, 220.5, "Perch"],
    [iFishPerch, fishLayer, -135.75, 240, "Perch"],
    [iFishPerch, fishLayer, -152, 250, "Perch"],
    [iFishPerch, fishLayer, -176, 247.5, "Perch"],
    [iFishPerch, fishLayer, -176, 235, "Perch"],
    [iFishPerch, fishLayer, -193, 244, "Perch"],
    [iFishPerch, fishLayer, -218, 253, "Perch"],
    [iFishPerch, fishLayer, -214, 222, "Perch"],
    [iFishPerch, fishLayer, -217.5, 208, "Perch"],
    [iFishPerch, fishLayer, -217.25, 170, "Perch"],
    [iFishPerch, fishLayer, -214, 229.5, "Perch"],

    [iFishRainbow, fishLayer, -171, 10.5, "Rainbow Trout"], // ----- Rainbow
    [iFishRainbow, fishLayer, -38, 43.5, "Rainbow Trout"],
    [iFishRainbow, fishLayer, 0, 42, "Rainbow Trout"],
    [iFishRainbow, fishLayer, -39, 11, "Rainbow Trout"],
    [iFishRainbow, fishLayer, -145, -0.5, "Rainbow Trout"],
    [iFishRainbow, fishLayer, -159.75, 86, "Rainbow Trout"],
    [iFishRainbow, fishLayer, -94, 65, "Rainbow Trout"],
    [iFishRainbow, fishLayer, -82, 76, "Rainbow Trout"],
    [iFishRainbow, fishLayer, -36.75, 97, "Rainbow Trout"],
    [iFishRainbow, fishLayer, -37.5, 174, "Rainbow Trout"],
    [iFishRainbow, fishLayer, -96, 186, "Rainbow Trout"],
    [iFishRainbow, fishLayer, -90, 241.5, "Rainbow Trout"],
    [iFishRainbow, fishLayer, -103, 241, "Rainbow Trout"],
    [iFishRainbow, fishLayer, -115, 247, "Rainbow Trout"],

    [iFishSalmon, fishLayer, -169, 21, "Salmon"], // ----- Salmon
    [iFishSalmon, fishLayer, -14, 74, "Salmon"],
    [iFishSalmon, fishLayer, -0.5, 22, "Salmon"],
    [iFishSalmon, fishLayer, -14, 12.5, "Salmon"],
    [iFishSalmon, fishLayer, -205, 83, "Salmon"],
    [iFishSalmon, fishLayer, -93, 188.5, "Salmon"],
    [iFishSalmon, fishLayer, -21.4, 234, "Salmon"],
    [iFishSalmon, fishLayer, -182, 244.5, "Salmon"],
    [iFishSalmon, fishLayer, -217.5, 172, "Salmon"],
    [iFishSalmon, fishLayer, -208, 230.5, "Salmon"],

    [iFishHaddock, fishLayer, -168.5, 23, "Haddock"], // ----- Haddock
    [iFishHaddock, fishLayer, -129, 50, "Haddock"],
    [iFishHaddock, fishLayer, -187, 29, "Haddock"],
    [iFishHaddock, fishLayer, -206.5, 85, "Haddock"],
    [iFishHaddock, fishLayer, -174, 128.5, "Haddock"],
    [iFishHaddock, fishLayer, -135.25, 236, "Haddock"],
    [iFishHaddock, fishLayer, -173, 248.5, "Haddock"],
    [iFishHaddock, fishLayer, -217, 168, "Haddock"],

    [iFishMistyGrouper, fishLayer, -210, 14, "Misty Grouper"], // ----- Misty Grouper
    [iFishMistyGrouper, fishLayer, -198.5, 249, "Misty Grouper"], // ----- Misty Grouper

    [iFishBlackGrouper, fishLayer, -210, 12, "Black Grouper"], // ----- Dark Grouper
    [iFishBlackGrouper, fishLayer, -196.5, 248, "Black Grouper"],

    [iFishSalmonShark, fishLayer, -11, 74.5, "Salmon Shark"], // ----- Salmon Shark
    [iFishSalmonShark, fishLayer, 0, 24, "Salmon Shark"],
    [iFishSalmonShark, fishLayer, -11, 12, "Salmon Shark"],

    [iFishArcticChar, fishLayer, -8, 75.5, "Arctic Char"], // ----- Arctic Char
    [iFishArcticChar, fishLayer, -17, 11.75, "Arctic Char"],
    [iFishArcticChar, fishLayer, -21, 231, "Arctic Char"],

    // Feathers ------------------------------------------

    [iFeatherPristineCapercaillie, featherLayer, -204, 28, "Pristine Capercaillie Feather"], // ----- Pristine Capercaillie Feather
    [iFeatherPristineCapercaillie, featherLayer, -145, 6, "Pristine Capercaillie Feather"],
    [iFeatherPristineCapercaillie, featherLayer, -106, 29, "Pristine Capercaillie Feather"],
    [iFeatherPristineCapercaillie, featherLayer, -53, 96, "Pristine Capercaillie Feather"],
    [iFeatherPristineCapercaillie, featherLayer, -51, 167, "Pristine Capercaillie Feather"],

    [iFeatherCapercaillie, featherLayer, -204, 25, "Capercaillie Feather"], // ----- Capercaillie Feather
    [iFeatherCapercaillie, featherLayer, -145, 3, "Capercaillie Feather"],
    [iFeatherCapercaillie, featherLayer, -106, 26, "Capercaillie Feather"],
    [iFeatherCapercaillie, featherLayer, -53, 93, "Capercaillie Feather"],
    [iFeatherCapercaillie, featherLayer, -51, 164, "Capercaillie Feather"],

    [iFeatherPristineHazelHen, featherLayer, -134, 37, "Pristine Hazel Hen Feather"], // ----- Pristine Hazel Hen Feather
    [iFeatherPristineHazelHen, featherLayer, -104, 24.5, "Pristine Hazel Hen Feather"],
    [iFeatherPristineHazelHen, featherLayer, -101, 161.25, "Pristine Hazel Hen Feather"],
    [iFeatherPristineHazelHen, featherLayer, -114, 95, "Pristine Hazel Hen Feather"],
    [iFeatherPristineHazelHen, featherLayer, -132, 149, "Pristine Hazel Hen Feather"],
    [iFeatherPristineHazelHen, featherLayer, -169, 91, "Pristine Hazel Hen Feather"],
    [iFeatherPristineHazelHen, featherLayer, -198, 210.5, "Pristine Hazel Hen Feather"],
    [iFeatherPristineHazelHen, featherLayer, -149, 214.5, "Pristine Hazel Hen Feather"],

    [iFeatherHazelHen, featherLayer, -134, 40, "Hazel Hen Feather"], // ----- Hazel Hen Feather
    [iFeatherHazelHen, featherLayer, -104, 27.5, "Hazel Hen Feather"], 
    [iFeatherHazelHen, featherLayer, -101, 163.75, "Hazel Hen Feather"], 
    [iFeatherHazelHen, featherLayer, -114, 97, "Hazel Hen Feather"], 
    [iFeatherHazelHen, featherLayer, -132, 152, "Hazel Hen Feather"], 
    [iFeatherHazelHen, featherLayer, -169, 95, "Hazel Hen Feather"], 
    [iFeatherHazelHen, featherLayer, -198, 213.5, "Hazel Hen Feather"], 
    [iFeatherHazelHen, featherLayer, -149, 216.5, "Hazel Hen Feather"], 

    [iFeatherPristineKiiruna, featherLayer, -22, 26, "Pristine Kiiruna Feather"], // ----- Pristine Kiiruna Feather
    [iFeatherPristineKiiruna, featherLayer, -17, 43, "Pristine Kiiruna Feather"],
    [iFeatherPristineKiiruna, featherLayer, -8, 60, "Pristine Kiiruna Feather"],
    [iFeatherPristineKiiruna, featherLayer, -63, 124, "Pristine Kiiruna Feather"],
    [iFeatherPristineKiiruna, featherLayer, -74, 161, "Pristine Kiiruna Feather"],
    
    [iFeatherKiiruna, featherLayer, -22, 23, "Kiiruna Feather"], // ----- Kiiruna Feather
    [iFeatherKiiruna, featherLayer, -17, 40, "Kiiruna Feather"], 
    [iFeatherKiiruna, featherLayer, -8, 57, "Kiiruna Feather"], 
    [iFeatherKiiruna, featherLayer, -63, 121, "Kiiruna Feather"], 
    [iFeatherKiiruna, featherLayer, -74, 158, "Kiiruna Feather"], 

    [iFeatherPristinePeacock, featherLayer, -215, 147, "Pristine Peacock Feather"], // ----- Pristine Peacock Letter
    [iFeatherPristinePeacock, featherLayer, -240, 122, "Pristine Peacock Feather"],

    [iFeatherPeacock, featherLayer, -215, 144, "Peacock Feather"], // ----- Peacock Feather
    [iFeatherPeacock, featherLayer, -240, 119, "Peacock Feather"],


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

    [iPlantCloudberries, plantLayer, -89, 71, "Cloudberries"], // ----- Cloudberries
    [iPlantCloudberries, plantLayer, -96, 122, "Cloudberries"],
    [iPlantCloudberries, plantLayer, -99, 146, "Cloudberries"],
    [iPlantCloudberries, plantLayer, -110, 175, "Cloudberries"],
    [iPlantCloudberries, plantLayer, -149, 219, "Cloudberries"],

    [iPlantRaspberries, plantLayer, -194, 96, "Raspberries"], // ----- Raspberries
    [iPlantRaspberries, plantLayer, -171, 91, "Raspberries"],
    [iPlantRaspberries, plantLayer, -201, 136, "Raspberries"],
    [iPlantRaspberries, plantLayer, -114, 99, "Raspberries"],
    [iPlantRaspberries, plantLayer, -196, 223, "Raspberries"],
    [iPlantRaspberries, plantLayer, -188, 208, "Raspberries"],
    [iPlantRaspberries, plantLayer, -177, 218, "Raspberries"],
    [iPlantRaspberries, plantLayer, -149, 212, "Raspberries"],

    [iPlantBlackberries, plantLayer, -171, 95, "Blackberries"], // ----- Blackberries
    [iPlantBlackberries, plantLayer, -199, 128, "Blackberries"],
    [iPlantBlackberries, plantLayer, -130, 85, "Blackberries"],
    [iPlantBlackberries, plantLayer, -116, 98, "Blackberries"],
    [iPlantBlackberries, plantLayer, -200, 215, "Blackberries"],
    [iPlantBlackberries, plantLayer, -165, 242, "Blackberries"],
    [iPlantBlackberries, plantLayer, -165, 242, "Blackberries"],
    [iPlantBlackberries, plantLayer, -151, 215.5, "Blackberries"],

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

    [iPlantMezereon, plantLayer, -211, 240, "Mezereons"], // ----- Mezereons

    [iPlantChanterelles, plantLayer, -200, 19, "Chanterelles"], // ----- Chanterelles
    [iPlantChanterelles, plantLayer, -152, 20, "Chanterelles"], // ----- Chanterelles
    [iPlantChanterelles, plantLayer, -74, 37.5, "Chanterelles"], // ----- Chanterelles
    [iPlantChanterelles, plantLayer, -63, 38.5, "Chanterelles"], // ----- Chanterelles
    [iPlantChanterelles, plantLayer, -53, 30, "Chanterelles"], // ----- Chanterelles
    [iPlantChanterelles, plantLayer, -55, 18, "Chanterelles"], // ----- Chanterelles
    [iPlantChanterelles, plantLayer, -65, 23, "Chanterelles"], // ----- Chanterelles

];

for (var i = 0; i < markerArray.length; i++) {
    marker = L.marker([markerArray[i][2], markerArray[i][3]], {
        icon: markerArray[i][0],
        title: markerArray[i][4]
    }).addTo(markerArray[i][1]);
}

// Click Map for Coordinates.
// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent(e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);