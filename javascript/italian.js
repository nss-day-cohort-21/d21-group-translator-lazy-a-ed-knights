console.log("italian.js, yo!");

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

// Sono giurato solennemente che non sono per niente bene
	}

	originalKnights.translateItToItalian = function(){
		let userInput = transText.value;
			userInput = userInput.toUpperCase();
		let newUserInput = userInput.split(" ");
		let transArray = [];
		let badWords = [];
	
	newUserInput.forEach(function(word){
		// console.log(Object.keys(italian));
		// console.log(italian[word]);
		let translation = italian[word];
		if (word in italian){
		transArray.push(translation)
		} else{
			badWords.push(word);
		} if (badWords.length > 1){	
				let badWordsArray = badWords.join(", ");
				// console.log("badWordsArray",badWordsArray);
				document.getElementById("error-message").innerHTML = `<b><i>"${badWordsArray}"</b></i> have been removed because they are not in our Italian dictionary.`
		}else if (badWords.length == 1){
			// console.log(word, "has been removed because it is not in our dictionary.");
			document.getElementById("error-message").innerHTML = `"${badWords}" has been removed because it is not in our Italian dictionary.`
		}
	});

		let transJoin = transArray.join(" ");
			transJoin = transJoin
		console.log("transJoin", transJoin);
		document.getElementById("transUpdated").innerHTML = `Your Translation: ${transJoin}!`
	}

	return originalKnights;

})(Knights);