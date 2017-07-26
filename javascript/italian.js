console.log("italian.js, yo!");

var Knights = (function(originalKnights){

	let italian =  { 
			merry:"MERRY", 
		    christmas:"CHRISTMAS",
		    ya: "YA",
		    filthy: "FILTHY",
		    animal: "ANIMAL",
		    hanukkah:"HANNNNNNNN",

	}

	originalKnights.translateItToItalian = function(){
		let userInput = transText.value;
	let newUserInput = userInput.split(" ");
	let transArray = [];
	
	newUserInput.forEach(function(word){
		// console.log(Object.keys(italian));
		// console.log(italian[word]);
		let translation = italian[word];
		if (word in italian){
		transArray.push(translation)
		} else{
			console.log(word, "has been removed because it is not in our dictionary.");
			document.getElementById("error-message").innerHTML = `"${word}" has been removed because it is not in our dictionary.`
		}
	});

		let transJoin = transArray.join(" ");
		console.log("transJoin", transJoin);
		document.getElementById("transUpdated").innerHTML = `${transJoin}`
	}

	return originalKnights;

})(Knights);