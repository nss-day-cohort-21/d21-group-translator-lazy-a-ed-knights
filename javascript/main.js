console.log("main.js");

let addTranslate = document.getElementById("btn-translate");

addTranslate.addEventListener("click", () => {
    let textTrans = document.getElementById("transText");
    let whichselected;
    var radios = document.getElementsByName("rad-lang");
    for(let i = 0; i < radios.length; i++){
        //0 = Binary, 1 = Dothraki, 2 = Italian, 3 = Office Speak
        if (radios[i].checked){
            whichselected = radios[i].value;
            break;
        }
    }
    console.log ('whichselected', whichselected);

    if (whichselected == 0){
        Knights.translateToBinary(textTrans);
    }else if (whichselected == 1){
        Knights.tranlsateToDothraki(textTrans);
    }else if (whichselected == 2){
        Knights.translateToItalian(textTrans);
    }else if (whichselected ==3){
        Knights.translateToOfficeSpeak(textTrans);
    }
});
