let ad = "Atakan";
let soyad = "Genç";
let yas = 66;
let sehir = "İstanbul";


let mesaj = "Benim adım " + ad + " ve soyadım " + soyad + "." + sehir + '\'da yaşıyorum.' + "Emekliliğe" + (65 - yas) + " yılım kaldı." ;

//Backtick
mesaj = `Benim adım ${ad} ve soyadım ${soyad}.${sehir}'da yaşıyorum.Emekliliğe ${65 - yas} yılım kaldı.`;
//ternary operators
let emeklilik = (65 - yas > 0) ? "Emekliliğe " + (65-yas) + " yılım kaldı." : "Emekliyim";
mesaj = `Benim adım ${ad} ve soyadım ${soyad}.${sehir}'da yaşıyorum.${emeklilik}`;

console.log(mesaj);