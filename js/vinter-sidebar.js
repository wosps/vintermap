map.addLayer(portLayer);

var togglePort = new Boolean(true);
var toggleFish = new Boolean(false);
var toggleFeather = new Boolean(false);
var toggleFarm = new Boolean(false);

console.log(toggleFish);

// document.addEventListener('click', function handleClick(event) {
//     event.target.classList.toggle('active');
//     if (toggleFish == false) {
//         console.log("fish was false");
//         map.addLayer(fishLayer);
//         toggleFish = true;
//     } else if (toggleFish) {
//         map.removeLayer(fishLayer);
//         toggleFish = false;
//     }
//   });

document.addEventListener('click', function handleClick(e) {
    var t = e.target // Set Target variable.
    if (t.parentNode.classList.contains("sidebar-btn")) t = t.parentNode; // Check if user click icon instead of surrounding button.
    if (t.classList.contains("sidebar-btn")) t.classList.toggle('active'); // Toggle button style.
    if (t.classList.contains("fish") && toggleFish == false) {
        map.addLayer(fishLayer);
        toggleFish = true;
    } else if (t.classList.contains("fish") && toggleFish == true) {
        map.removeLayer(fishLayer);
        toggleFish = false;
    } else if (t.classList.contains("port") && togglePort == false) {
        map.addLayer(portLayer);
        togglePort = true;
    } else if (t.classList.contains("port") && togglePort == true) {
        map.removeLayer(portLayer);
        togglePort = false;
    }
});
