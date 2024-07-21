// Dizi methodları

let ogrenciler = ["Mehmet", "Selver", "Fatih"];

let sonuc;

sonuc = ogrenciler.length;
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(' ');

//eleman silme

// sonuc = ogrenciler.pop(); //son elemanı siler ve silinen elemanı geriye döndürür.
// sonuc = ogrenciler.shift();  //ilk elemanı siler ve silinen elemanı geriye döndürür.


//eleman ekleme 

// sonuc = ogrenciler.push("Burak");
// sonuc = ogrenciler.unshift("Yusuf")


//eleman arama 

// sonuc = ogrenciler.indexOf("Mehmet");
// sonuc = ogrenciler.lastIndexOf("Mehmet");
sonuc = ogrenciler.includes("Selver");


//silme,ekleme

sonuc = ogrenciler.splice(1,1,"Atakan","Furkan");

console.log(sonuc);
console.log(ogrenciler);