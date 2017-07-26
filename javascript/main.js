//THIS IS THE CODE THAT WORKS FOR ALL MVP
let transText = document.getElementById("transText");
let addTranslate = document.getElementById("btn-translate");
let output = document.getElementById("transUpdated");


addTranslate.addEventListener("click", () => {
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
        Knights.translateToBinary()
    }else if (whichselected == 1){
       Knights.translateToDothraki()
    }
    else if (whichselected == 2){
        Knights.translateToItalian();
    }else if (whichselected == 3){
        Knights.translateToOfficeSpeak();
    }
});






