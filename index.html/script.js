
// Inisialisasi peta
var map = L.map('map').setView([-6.2383, 106.9756], 12); // Koordinat Bekasi

// Tambahkan tile layer (background peta)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Contoh data mall (koordinat dan nama)
var malls = [
    { name: "Summarecon Mall Bekasi", lat: -6.2229, lng: 106.9926 },
    { name: "Grand Metropolitan Mall", lat: -6.2571, lng: 106.9807 },
    { name: "Metropolitan Mall", lat: -6.2446, lng: 106.9922 },
    { name: "Grand Galaxy Park", lat: -6.2735, lng: 107.0008 },
    { name: "Mega Bekasi Hypermall", lat: -6.24956, lng: 106.99284},
    { name: "Revo Town", lat: -6.2469, lng: 106.9842},
    { name: "Blu Plaza", lat: -6.2370, lng: 106.9915},
    { name: "Bekasi Cyber Park", lat: -6.2398, lng: 106.9953},
    { name: "Bekasi Junction", lat: -6.2385, lng: 106.9920},
    { name: "Plaza Pondok Gede", lat: -6.2711, lng: 107.0083},
    { name: "Pakuwon Mall Bekasi", lat: -6.2480, lng: 106.9875}
];

// Tambahkan marker untuk setiap mall
malls.forEach(function(mall) {
    L.marker([mall.lat, mall.lng])
        .addTo(map)
        .bindPopup(`<b>${mall.name}</b>`);
});


