//IF Else Koşul İfadeleri

// yas >= 18 
// mezuniyet == "lise" ya da mezuniyet == "üniversite"


let yas = 20;
let mezuniyet = "lise";

if((yas >= 18) && ( (mezuniyet == "lise") || (mezuniyet == "üniversite" )) )
{
    console.log("ehliyet alabilir");
}else{
    console.log("ehliyet alamaz");
}


//4- Mantıksal Operatörler


//and (&&)
// true true =  true,
// true, false = false
// false false = false

//veya ||

// true true = true
// true false =  true
//false false = false