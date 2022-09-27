var portLayer = L.layerGroup([]);
var fishLayer = L.layerGroup([]);
var featherLayer = L.layerGroup([]);
var plantLayer = L.layerGroup([]);
var shopLayer = L.layerGroup([]);
var monumentLayer = L.layerGroup([]);

var overlayMaps = {
    "Ports": portLayer,
    "Fish": fishLayer,
    "Feathers": featherLayer,
    "Plants": plantLayer,
    "Monuments": monumentLayer,
    "Shops": shopLayer
};

var itemIcon = L.Icon.extend({
    options: {
        iconSize: [40, 40]
    }
});

var portIcon = L.Icon.extend({
    options: {
        iconSize: [37.5, 45.5],
    }
})

var iPort = new portIcon({
    iconUrl: 'img/icons/boat.png'
});

var iShopMystery = new itemIcon({
    iconUrl: 'img/icons/mystery-shop.png'
});
var iShopNormal = new itemIcon({
    iconUrl: 'img/icons/common-shop.png'
});

var iMonumentCrate = new itemIcon({
    iconUrl: 'img/icons/crate-monument.png'
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

const mapData = [
    [iPort, portLayer, -38, -9, `<h3>Sgt. Lake Outpost</h3><p>Port</p>`],
    [iPort, portLayer, -8, -46, `<h3>Tim's Outpost</h3><p>Port</p>`],
    [iPort, portLayer, 6, 20, `<h3>Sirola's Secret Shop</h3><p>Port</p>`],
    [iPort, portLayer, -34, -44, `<h3>Jax's Outpost</h3><p>Port</p>`],
    [iPort, portLayer, -44, -44, `<h3>Henry's Fishing Dock</h3><p>Port</p>`],
    [iPort, portLayer, -53, 6, `<h3>Mrs. Snow's Outpost</h3><p>Port</p>`],
    [iPort, portLayer, -53, 40, `<h3>Artur's Outpost</h3><p>Port</p>`],
    [iPort, portLayer, -39, 54, `<h3>Filemon's Outpost</h3><p>Port</p>`],
    [iPort, portLayer, -6, 55, `<h3>Heimo & Rose</h3><p>Port</p>`],
    [iPort, portLayer, -32, -72, `<h3>Diogo's Dock</h3><p>Port</p>`],
    [iPort, portLayer, -51, 62.5, `<h3>Pix's Island</h3><p>Port</p>`],
    [iPort, portLayer, 4, 59, `<h3>Kiolot Harbor</h3><p>Port</p>`],
    [iPort, portLayer, 44, 8, `<h3>Kyrres Base Camp</h3><p>Port</p>`],
    [iPort, portLayer, -32, -103, `<h3>Padva Harbor</h3><p>Port</p>`],
    [iPort, portLayer, -60, 70, `<h3>Heisala Harbor</h3><p>Port</p>`],

    // Mystery Shops ------------------------------------

    [iShopMystery, shopLayer, -51, -15, `<h3>Mystery Shop</h3><p>Vending Machine</p>`],
    [iShopMystery, shopLayer, -32, -75, `<h3>Mystery Shop</h3><p>Vending Machine</p>`],
    [iShopMystery, shopLayer, -91, 184, "Mystery Shop"],
    [iShopMystery, shopLayer, -97, 139, "Mystery Shop"],
    [iShopMystery, shopLayer, -113, 193, "Mystery Shop"],
    [iShopMystery, shopLayer, -164, 35, "Mystery Shop"],
    [iShopMystery, shopLayer, -210.5, 128.75, "Mystery Shop"],

    // Normal Shops -------------------------------------

    [iShopNormal, shopLayer, -32, -69, `<h3>James General Store</h3><p>Vending Machine</p>`],
    [iShopNormal, shopLayer, -164, 39, "James General Store"],
    [iShopNormal, shopLayer, -116, 81, "James General Store"],
    [iShopNormal, shopLayer, -79, 101, "James General Store"],
    [iShopNormal, shopLayer, -175, 139, "James General Store"],
    [iShopNormal, shopLayer, -164, 195, "James General Store"],
    [iShopNormal, shopLayer, -196, 190, "James General Store"],

    // Monuments ----------------------------------------

    [iMonumentCrate, monumentLayer, -10, 66, "Crate"],
    [iMonumentCrate, monumentLayer, -32, 24, "Crate"],
    [iMonumentCrate, monumentLayer, -70, 36, "Crate"],
    [iMonumentCrate, monumentLayer, -70, 34, "Crate"],
    [iMonumentCrate, monumentLayer, -206, 22, "Crate"],
    [iMonumentCrate, monumentLayer, -68, 148, "Crate"],
    [iMonumentCrate, monumentLayer, -68, 146, "Crate"],
    [iMonumentCrate, monumentLayer, -80, 103, "Crate"],
    [iMonumentCrate, monumentLayer, -81, 105, "Crate"],
    [iMonumentCrate, monumentLayer, -90, 73, "Crate"],
    [iMonumentCrate, monumentLayer, -92, 131, "Crate"],
    [iMonumentCrate, monumentLayer, -97, 137, "Crate"],
    [iMonumentCrate, monumentLayer, -121, 151, "Crate"],
    [iMonumentCrate, monumentLayer, -121, 153, "Crate"],
    [iMonumentCrate, monumentLayer, -179, 99, "Crate"],
    [iMonumentCrate, monumentLayer, -113, 191, "Crate"],
    [iMonumentCrate, monumentLayer, -156, 174, "Crate"],
    [iMonumentCrate, monumentLayer, -162, 194, "Crate"],
    [iMonumentCrate, monumentLayer, -162, 196, "Crate"],
    [iMonumentCrate, monumentLayer, -194, 189, "Crate"],
    [iMonumentCrate, monumentLayer, -194, 191, "Crate"],
    [iMonumentCrate, monumentLayer, -206, 242, "Crate"],
    [iMonumentCrate, monumentLayer, -29, 231, "Crate"],

    // Fish ---------------------------------------------

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
    // ----- Pristine Kiiruna Feather
    [iFeatherPristineKiiruna, featherLayer, 43, -73, "Pristine Kiiruna Feather"], //----
    [iFeatherPristineKiiruna, featherLayer, -63, 124, "Pristine Kiiruna Feather"],
    [iFeatherPristineKiiruna, featherLayer, -74, 161, "Pristine Kiiruna Feather"],
    
// ----- Kiiruna Feather
    [iFeatherKiiruna, featherLayer, 43, -76, "Kiiruna Feather"], //-8, 57 ->  48, -59 -> +56 -116
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
]