//Diziler



let urunler = ["Iphone 13","Iphone 14", "Iphone 15"];
let fiyatlar = [50000, 60000, 70000];
let renkler = ["gold", "black","silver"];

let sonuc = `${urunler[0]}`;

sonuc = `${urunler[1]} - ${fiyatlar[1]} - ${renkler[1]}`;

// let urun1 = ["Iphone 13", 50000, "gold"];
// let urun2 = ["Iphone 14", 60000, "black"];
// let urun3 = ["Iphone 15", 70000, "silver"];

// sonuc = `${urun1[0]} ${urun1[1]} ${urun1[2]}`


let urun1 = [
    "Iphone 13",
    50000,
    ["gold","black","silver"]    
];

urun1[0] = "Iphone 13 Pro"

sonuc = `${urun1[0]} ${urun1[1]} ${urun1[2][1]}`





console.log(sonuc);