console.log("binary.js")

var Knights = (function(originalKnights){

	let binary =  { 
			MERRY:"01101101 01100101 01110010 01110010 01111001", 
		    CHRISTMAS:"01100011 01101000 01110010 01101001 01110011 01110100 01101101 01100001 01110011",
		    YA: "01111001 01100001",
		    FILTHY: "01100110 01101001 01101100 01110100 01101000 01111001",
		    ANIMAL: "01100001 01101110 01101001 01101101 01100001 01101100",
		    HANUKKAH:"01101000 01100001 01101110 01110101 01101011 01101011 01100001 01101000",
		    KWANZAA: "dispiace",
		    TREE: "lo",
		    GOOD: "stupido",
		    TIDINGS: "Solennemente",
		    AND: "giurato",
		    HAPPY:"che",
		    NEW:"sono",
		    YEAR:"01111001 01100101 01100001 01110010",
		    !:"00100001",
		    .:"00101110"
}
	originalKnights.translateItToBinary = function(){
		let userInput = transText.value;
			userInput = userInput.toUpperCase();
		let newUserInput = userInput.split(" ");
		let transArray = [];
		let badWords = [];
	
	newUserInput.forEach(function(word){
		let translation = binary[word];
		if (word in binary){
		transArray.push(translation)
		} else if (word.length > 1){
				badWords.push(word);
				let badWordsArray = badWords.join(", ");
				// console.log("badWordsArray",badWordsArray);
				document.getElementById("error-message").innerHTML = `<b><i>"${badWordsArray}"</b></i> have been removed because they are not in our Italian dictionary.`
		}else{
			// console.log(word, "has been removed because it is not in our dictionary.");
			document.getElementById("error-message").innerHTML = `"${word}" has been removed because it is not in our Italian dictionary.`
		}
	});

		let transJoin = transArray.join(" ");
			transJoin = transJoin
		console.log("transJoin", transJoin);
		document.getElementById("transUpdated").innerHTML = `Your Translation: ${transJoin}!`
	}

	return originalKnights;

})(Knights);