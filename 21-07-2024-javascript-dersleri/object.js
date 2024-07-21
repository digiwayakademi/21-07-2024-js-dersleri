//Nesneler (Objects)

// let kullanici = [
//     "Atakan",
//     "Genç",
//     32,       
// ];

//key - value

let kullanici1 = {
   "ad": "Atakan",
   "soyad": "Genç",
   "yas": 32,
   "adres": {
    "sehir": "istanbul",
    "ilce": "beylikdüzü",    
   },
   "hobiler": ["sinema","spor"] 
};

let kullanici2 = {
    "ad": "Sezer",
    "soyad": "Genç",
    "yas": 32,
    "adres": {
     "sehir": "istanbul",
     "ilce": "beylikdüzü",    
    },
    "hobiler": ["sinema","spor"] 
 };

 let kullanicilar = [kullanici1, kullanici2]   


let sonuc;

sonuc = kullanici1; 
sonuc = kullanici1["soyad"];
sonuc = kullanici1["adres"];
sonuc = kullanici1["adres"]["ilce"];
sonuc = kullanici1.ad;
sonuc = kullanici1.adres.sehir;
sonuc = kullanici1.hobiler[0];

sonuc = kullanicilar[1].ad;
console.log(sonuc);