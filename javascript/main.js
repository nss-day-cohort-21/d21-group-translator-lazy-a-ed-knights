console.log("main.js");

let addTranslate = document.getElementById("btn-translate");


addTranslate.addEventListener("click", () => {
    let textTrans = document.getElementById("transText").value;
    var individualWords = textTrans.split(" ");
    for (var i = 0; i < individualWords.length - 1; i++) {
    individualWords[i] += " ";
     console.log("individualWords", individualWords);
}

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
        Knights.translateToBinary(individualWords);
    }else if (whichselected == 1){
        Knights.tranlsateToDothraki(individualWords);
    }else if (whichselected == 2){
        Knights.translateToItalian(individualWords);
    }else if (whichselected ==3){
        Knights.translateToOfficeSpeak(individualWords);
    }
});
