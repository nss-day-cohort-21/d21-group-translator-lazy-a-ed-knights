console.log("Dothraki.js");

var Knights = (function(originalKnights){

   let Dothraki = {
    MERRY:"layafat", 
    CHRISTMAS:"vitteyqoyi",
    YA:"yer",
    FILTHY:"sorf",
    ANIMAL:"rhoa",
    HANUKKAH:"viteya",
    KWANZAA:"viteya",
    TREE:"feshith",
    GOOD:"erin",
    TIDINGS:"vasterat", 
    AND:"ma", 
    HAPPY:"layafat", 
    NEW:"sash", 
    YEAR:"firesof",
    I:"anha",
    WE:"kisha",
    YOU:"yer",
    WISH:"asto",
    FOOL:"tokik",
    WHO:"fin",
    HATES:"fejat",
    
}

originalKnights.translateToDothraki = function(){
		let error = document.getElementById("error-message");
         error.innerHTML = " ";
         let userInput = transText.value;
			userInput = userInput.toUpperCase();
		let newUserInput = userInput.split(" ");
		let transArray = [];
		let badWords = [];
	
	newUserInput.forEach(function(word){
		// console.log(Object.keys(Dothraki));
		// console.log(Dothraki[word]);
		let translation = Dothraki[word];
		if (word in Dothraki){    
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
                document.getElementById("error-message").innerHTML = `<b><i>"${badWordsArray}"</b></i> have been removed because they are not in our Dothraki dictionary.`
		}else if(badWords.length == 1){
			// console.log(word, "has been removed because it is not in our dictionary.");
			document.getElementById("error-message").innerHTML = `"${badWords}" has been removed because it is not in our Dothraki dictionary.`
		}
	});
};

	return originalKnights;

})(Knights);