//Numbers 

let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.7");
sonuc = parseFloat("10.7");
sonuc = parseInt("10a");
sonuc = parseInt("a10");

sonuc = isNaN("a10"); // is not a number mı

let sayi = 10.12355;

sonuc = sayi.toPrecision(5);
sonuc = sayi.toFixed(2);


sonuc = Math.round(2.6);
sonuc = Math.ceil(2.2);
sonuc = Math.floor(2.9);
sonuc = Math.sqrt(49);
sonuc = Math.pow(2,3);
sonuc = Math.min(2,3,4,5,6,7,8,15,1,1,1,1);
sonuc = Math.max(2,3,4,5,6,7,8,15,1,2,2,2);

sonuc =Math.floor(Math.random() * 10 + 1);

console.log(typeof sonuc);
console.log(sonuc);