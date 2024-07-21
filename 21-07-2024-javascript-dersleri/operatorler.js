//Operatörler

let sonuc;
let a=10, b=11, c=30;


// 1- Aritmetik Operatörler 
sonuc = (a + b);
sonuc = (a - b);
sonuc = (a * b);
sonuc = (a / b);
sonuc = (b % a);
//sonuc = a++; // sonuc = a + 1
// sonuc = ++a; // sonuc = a + 1
// sonuc = a--; // sonuc = a - 1
// sonuc = --a; // sonuc = a - 1


//2- Atama Operatörleri
sonuc = a;
sonuc += a;  //(sonuc = sonuc + a )
sonuc += (a + b) //(sonuc = (a+ b) + sonuc)
sonuc -= a; // sonuc = sonuc - a
sonuc *= a; // sonuc = sonuc * a
sonuc /= a; // sonuc = sonuc / a

// 3- Karşılaştırma Operatörleri

sonuc = (a == b);
sonuc = (a != b);
sonuc = (2 === "2");
sonuc = (a>=b);




//4- Mantıksal Operatörler


console.log(sonuc);
//console.log(a);
