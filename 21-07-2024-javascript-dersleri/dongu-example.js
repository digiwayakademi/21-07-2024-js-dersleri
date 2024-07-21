// Uygulama Döngüler

let sayilar = [3,5,7,8,12,23,45,66,75,95,100];

// 1- sayilar dizisindeki her bir sayının karesini yazdırınız.

// for(let i=0; i<sayilar.length; i++)
// {
//     console.log(sayilar[i] * sayilar[i])
// }   

// 2- sayilar listesindeki hangi sayılar 5 in katıdır

// for(i=0; i<sayilar.length; i++)
// {
//     if(sayilar[i] % 5 == 0)
//     {
//         console.log(sayilar[i]);
//     }
// }

// let i=0;

// while(i< sayilar.length)
// {
//     if(sayilar[i] % 5 == 0)
//     {
//             console.log(sayilar[i]);
//     }
//     i++;
// }    


// 3- 50-100 arasındaki sayıları azalan şeklinde yazdırınız.

// for(let i=100; i>=50; i--)
// {
//     console.log(i);
// }

let urunler = ["iphone 16", "samsung s25", "iphone 17", "samsung s26","samsung s27","iphone 18", "samsung tv"];

//4- ürünler listesindeki tüm ürünleri büyük harfe çeviriniz

// for(let i=0; i<urunler.length; i++)
// {
//     console.log(urunler[i].toUpperCase());
// }


//5- ürünler listesinin içinde samsung kelimesi geçen kaç kelime vardır?

let adet = 0;

for(let i=0; i<urunler.length; i++)
{
    if(urunler[i].includes("samsung"))
    {
        adet++;
    }
}

console.log(adet + " kelime bulundu")