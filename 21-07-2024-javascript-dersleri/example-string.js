//String Uygulama


let url = "https://www.digiway.com.tr";
let kursAdi = "Fullstack Yazılım Uzmanlığı";
let sonuc;

//1- url kaç karakterlidir? 
sonuc = url.length;

//2- kurs adı kaç kelimeden oluşmaktadır.
sonuc = kursAdi.split(' ').length;

//3- url https ile mi başlıyor?
    // if(url.startsWith("h534ps://"))
    // {
    //     console.log("evet başlıyor");
    // }else{
    //     console.log("hayır başlamıyor");
    // }

//4- kursadi içerisinde Eğitimi kelimesi var mı?

//   sonuc = kursAdi.indexOf("Eğitimi");
//     if(sonuc >= 0)
//     {
//         console.log("evet var")
//     }else{
//         console.log("hayır yok")
//     }

//5-url ve kursadi değişkenlerini kulanarak aşağıdaki string bilgiyi yazdırınız.

// https://www.digiway.com.tr/fullstack-yazilim-uzmanligi

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(' ','-');
kursAdi = kursAdi.replaceAll('ı','i').replace('ğ','g');

sonuc = `${url}/${kursAdi}`;


console.log(sonuc);