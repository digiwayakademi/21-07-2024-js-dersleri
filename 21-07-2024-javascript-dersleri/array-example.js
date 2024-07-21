//1- Kiraz, Karpuz, Kavun,Erik elemanlarına sahip bir dizi tanımlayınız.

let meyveler = ["Kiraz", "Karpuz", "Kavun", "Erik"];


//2- Dizi kaç elemanlıdır

let sonuc;

sonuc = meyveler.length;
//3- Dizinin ilk ve son elemanlarını yazdırınız.
sonuc = meyveler[meyveler.length - 1];

//4- Kavun dizinin bir elemanımıdır? 
sonuc = meyveler.indexOf("Kavun");
sonuc = meyveler.includes("Kavun");
//5- Çilek elemanını dizinin sonuna  ekleyiniz.
meyveler.push("Çilek");



//6- Dizinin son 2 elemanını siliniz.
// meyveler.pop();
// meyveler.pop();

meyveler.splice(meyveler.length - 2,2)

console.log(meyveler);
console.log(sonuc);