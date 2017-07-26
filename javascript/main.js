//THIS IS THE CODE THAT WORKS FOR ALL MVP
let transText = document.getElementById("transText");
let addTranslate = document.getElementById("btn-translate");
let output = document.getElementById("transUpdated");


addTranslate.addEventListener("click", () => {

    var radios = document.querySelector('input[name = "rad-lang"]:checked').value;
    // for(let i = 0; i < radios.length; i++){
    //     //0 = Binary, 1 = Dothraki, 2 = Italian, 3 = Office Speak
    //     if (radios[i].checked){
    //         whichselected = radios[i].value;
    //         break;
    //     }
    // }
    console.log ('radios', radios);

    switch (radios){
        case "0":
        Knights.translateToBinary()
        break;
        case "1":
       Knights.translateToDothraki()
        break;
        case "2":
        Knights.translateToItalian();
        break;
        case "3":
        Knights.translateToOfficeSpeak();
        break;
    }
    });

    function speechText() {
     let msg = new SpeechSynthesisUtterance();
     msg.text = document.getElementById("transUpdated").innerHTML;
     msg.pitch = 0;
     msg.volume = 1;
     speechSynthesis.speak(msg);
};
