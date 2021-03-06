console.log ("officespeak.js");



var Knights = (function(originalKnights){
    let outputBox = document.getElementsByClassName("transBoxType");

    let myOfficeSpeak = {

    MERRY:"Leverage agile frameworks", 
    CHRISTMAS:"robust synopsis",
    YA:"overall value proposition",
    FILTHY:"organically grow",
    ANIMAL:"generation X",
    HANUKKAH:"streamlined cloud solution",
    KWANZAA:"ballpark value",
    TREE:"ROI",
    GOOD:"offshoring",
    TIDINGS:"real-time",
    TO:"replace the coffee",
    YOU:"401k",
    BRING:"severance package",
    EGGNOG:"corner office", 
    AND:"nanotechnology", 
    HAPPY:"podcasting", 
    NEW:"information highway", 
    YEAR:"digital divide"
}

    originalKnights.translateToOfficeSpeak = function(){
        let error = document.getElementById("error-message");
         error.innerHTML = "";
        let userInput = transText.value;
            userInput = userInput.toUpperCase();
        let newUserInput = userInput.split(" ");
        let transArray = [];
        let badWords = [];
    
    newUserInput.forEach(function(word){
        // console.log(Object.keys(italian));
        // console.log(italian[word]);
        let translation = myOfficeSpeak[word];
        if (word in myOfficeSpeak){
            transArray.push(translation)
        let transJoin = transArray.join(" ");
            // transJoin = transJoin;
        // console.log("transJoin", transJoin);
        document.getElementById("transUpdated").innerHTML = `Your Translation: ${transJoin}!`;
        } else{
            badWords.push(word);
            document.getElementById("transUpdated").innerHTML = "Nothing to Translate!";

        } if (badWords.length > 1){ 
                let badWordsArray = badWords.join(", ");
                // console.log("badWordsArray",badWordsArray);
                document.getElementById("error-message").innerHTML = `<b><i>"${badWordsArray}"</b></i> have been removed because they are not in our Office Speak dictionary.`
        }else if (badWords.length === 1) {
            // console.log(word, "has been removed because it is not in our dictionary.");
            document.getElementById("error-message").innerHTML = `"${badWords}" has been removed because it is not in our Office Speak dictionary.`
        }
    });

    }
    

    return originalKnights;

})(Knights);
