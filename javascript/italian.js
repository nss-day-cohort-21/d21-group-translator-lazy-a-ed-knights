console.log("italian.js, yo!");
// File created by Dr. Teresa Vasquez

var Knights = (function(originalKnights){

	let italian =  { 
			MERRY:"buon",
			CHRISTMAS:"Natale",
			YA: "tu",
		    FILTHY: "sporco",
		    ANIMAL: "animale",
		    I:"Mi",
		    PITY: "dispiace",
		    THE: "lo",
		    FOOL: "stupido",
		    SOLEMNLY: "Solennemente",
		    SWEAR: "giurato",
		    THAT:"che",
		    AM:"sono",
		    UP:"",
		    TO:"per",
		    NO:"niente",
		    GOOD:"bene",
		    DURING:"durante",
		    WHO:"Che",
		    HATES:"odia"
	};

	originalKnights.translateToItalian = function(){
		let error = document.getElementById("error-message");
         error.innerHTML = " ";
		let userInput = transText.value;
			userInput = userInput.toUpperCase();
		let newUserInput = userInput.split(" ");
		let transArray = [];
		let badWords = [];
	
	newUserInput.forEach(function(word){
		let translation = italian[word];
		if (word in italian){    
			transArray.push(translation);
        let transJoin = transArray.join(" ");
        document.getElementById("transUpdated").innerHTML = `Your Translation: ${transJoin}!`;
        } else{
            badWords.push(word);
            document.getElementById("transUpdated").innerHTML = "Nothing to Translate!";

        } if (badWords.length > 1){ 
                let badWordsArray = badWords.join(", ");
                document.getElementById("error-message").innerHTML = `<b><i>"${badWordsArray}"</b></i> have been removed because they are not in our Italian dictionary.`
		}else if (badWords.length == 1){
			document.getElementById("error-message").innerHTML = `"${badWords}" has been removed because it is not in our Italian dictionary.`
		}
	});
};

	return originalKnights;

})(Knights);