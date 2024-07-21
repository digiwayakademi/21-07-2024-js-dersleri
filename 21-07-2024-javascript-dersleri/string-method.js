// String Methodları

var kursAdi = "Digiway Akademi Fullstack Yazılım Uzmanlığı.";
var sonuc;


sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[37];
sonuc = kursAdi.slice(8,15);
sonuc = kursAdi.slice(25);
sonuc = kursAdi.slice(-10, -5);

sonuc = kursAdi.substring(10);
sonuc = kursAdi.replace("Uzmanlığı","Eğitimi");

sonuc = kursAdi.trim();
sonuc = kursAdi.trimStart();
sonuc = kursAdi.trimEnd();

sonuc = kursAdi.indexOf("Web");
sonuc = kursAdi.split(" ");
sonuc = kursAdi.split(" ")[3];

console.log(sonuc);