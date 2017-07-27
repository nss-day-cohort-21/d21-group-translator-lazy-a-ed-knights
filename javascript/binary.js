console.log("Binary Christmas AF");

var Knights = (function(originalKnights){

	let binary =  { 
			MERRY:"01001101 01000101 01010010 01010010 01011001", 
		    CHRISTMAS:"01000011 01001000 01010010 01001001 01010011 01010100 01001101 01000001 01010011",
		    YA: "01011001 01000001",
		    FILTHY: "01000110 01001001 01001100 01010100 01001000 01011001",
		    ANIMAL: "01000001 01001110 01001001 01001101 01000001 01001100",
		    I:"01001001",
		    PITY: "01010000 01001001 01010100 01011001",
		    THE: "01010100 01001000 01000101",
		    FOOL: "01000110 01001111 01001111 01001100",
		    SOLEMNLY: "01010011 01001111 01001100 01000101 01001101 01001110 01001100 01011001",
		    SWEAR: "01010011 01010111 01000101 01000001 01010010",
		    THAT:"01010100 01001000 01000001 01010100",
		    AM:"01000001 01001101",
		    UP:"01010101 01010000",
		    TO:"01010100 01001111",
		    NO:"01001110 01001111",
		    GOOD:"01000111 01001111 01001111 01000100",
		    DURING:"01000100 01010101 01010010 01001001 01001110 01000111",
		    WHO:"01010111 01001000 01001111",
		    HATES:"01001000 01000001 01010100 01000101 01010011"

// Sono giurato solennemente che non sono per niente bene
	}
	originalKnights.translateToBinary = function(){
		let error = document.getElementById("error-message");
         error.innerHTML = " ";
		let userInput = transText.value;
			userInput = userInput.toUpperCase();
		let newUserInput = userInput.split(" ");
		let transArray = [];
		let badWords = [];
	newUserInput.forEach(function(word){
		// console.log(Object.keys(italian));
		// console.log(italian[word]);
		let translation = binary[word];
		if (word in binary){
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
				document.getElementById("error-message").innerHTML = `<b><i>"${badWordsArray}"</b></i> have been removed because they are not in our binary dictionary.`
		}else{
			// console.log(word, "has been removed because it is not in our dictionary.");
			document.getElementById("error-message").innerHTML = `"${word}" has been removed because it is not in our binary dictionary.`
		}
	});
	
	}

	return originalKnights;

})(Knights);