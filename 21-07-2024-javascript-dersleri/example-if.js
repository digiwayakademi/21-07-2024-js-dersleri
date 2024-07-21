//ehliyet alma uygulaması
// yas >= "18"
// mezuniyet == "lise" ya da mezuniyet == "üniversite"

let mezuniyet = "lise";
let yas = 17;

if(yas >=18 && (mezuniyet == "üniversite" || mezuniyet == "lise") ){
   
      console.log("ehliyet alabilir.") 
  
    
}else{
    console.log("ehliyet şartları tutmuyor.")
}


//and (ve)
//true, true => true
//true, false => false

//or (ya da)
//true, true => true
//true, false => true
// false, false => false