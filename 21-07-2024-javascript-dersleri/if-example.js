// If else uygulamaları

// 1- bir sayının 50-100 arasında olup olmadığını kontrol ediniz.

// let sayi = 100;

// if(sayi >= 50 && sayi <= 100)
// {
//     console.log("sayı 50-100 arasındadır.");
// }else{
//     console.log("sayı 50-100 arasında değildir.");
// }

// 2- Bir sayının pozitif çift sayı olup olmadığını kontrol ediniz.
// let sayi = 59;

// if(sayi % 2 == 0 && sayi > 0)
// {
//     console.log("sayı pozitif çift sayıdır.");
// }else{
//     console.log("sayı pozitif çift sayı değildir.");

// }

//3- x,y,z sayılarının büyüklük karşılaştırmasını yapınız.

// let x = 88, y = 88, z=88;

//     if(x > y && x > z)
//     {
//         console.log("x en büyük sayıdır.");
//     }else if(y>x && y>z)
//     {
//     console.log("y en büyük sayıdır.");
//     }else if(z>x && z> y)
//     {
//             console.log("z en büyük sayıdır."); 
//     }else{
//         console.log("sayılar birbirine eşit."); 
//     }




//4- 2 vize (40%) ve 1 final (60%) notuna ortalama hesaplayınız.
// a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın
// b - Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
// c - Finalden 70 alındığında ortalama 50 nin altında bile olsa geçti sayılsın.

let vize1 = 100;
let vize2 = 100;
let final = 49;

let ortalama = ((vize1 + vize2) / 2) * 0.4 + (final * 0.6);

console.log(ortalama);

if((ortalama >= 50 || final >= 70 ) && final>=50)
{
    console.log("geçti");
}else{
    console.log("kaldı");
}