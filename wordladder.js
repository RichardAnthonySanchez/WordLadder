var model = {
	
	numWords: 10,
	randomArrOne: [],
	randomArrTwo: [],
	lineArr: [],
	nouns: [ //could use more words
	"people",
	"history",
	"way",
	"art",
	"world",
	"information",
	"map",
	"two",
	"family",
	"government"
	],
	verbs: [
	"abide",
	"accelerate",
	"accept",
	"accomplish",
	"achieve",
	"acquire",
	"acted",
	"activate",
	"adapt",
	"add"
]

};

var controller = {
	
	randomWordOrderOne: function () {
		var numOfWords = model.numWords;
		while (model.randomArrOne.length < numOfWords) {
			var randomNumber = Math.floor(Math.random() * numOfWords);
			if (model.randomArrOne.indexOf(randomNumber) === -1) model.randomArrOne.push(randomNumber);
			}
	},
	randomWordOrderTwo: function () {
		var numOfWords = model.numWords;
		while (model.randomArrTwo.length < numOfWords) {
			var randomNumber = Math.floor(Math.random() * numOfWords);
			if (model.randomArrTwo.indexOf(randomNumber) === -1) model.randomArrTwo.push(randomNumber);
			}
	},
	finishLines: function () { 
	for (i = 0; i < model.numWords; i++) {
	var lineInput = document.getElementById("lineInput" + i);
	var line = lineInput.value;
	model.lineArr.push(line); //push the user's lines to the array
	}
	view.sendLines();
	}
};

var view = {
	
copyLines: function() {
  var copyText = document.getElementById("myInput");
	copyText.select();
  navigator.clipboard.writeText(copyText.value);
},
	
sendLines: function() { //this function could send the user's inputs with better formatting
	var allLines = document.getElementById("myInput")
	allLines.value = model.lineArr; 
},
	
display: function () { 
	var noun0 = document.getElementById("noun0")
	noun0.innerHTML = model.nouns[model.randomArrOne[0]];
	var noun1 = document.getElementById("noun1")
	noun1.innerHTML = model.nouns[model.randomArrOne[1]];
	var noun2 = document.getElementById("noun2")
	noun2.innerHTML = model.nouns[model.randomArrOne[2]];
	var noun3 = document.getElementById("noun3")
	noun3.innerHTML = model.nouns[model.randomArrOne[3]];
	var noun4 = document.getElementById("noun4")
	noun4.innerHTML = model.nouns[model.randomArrOne[4]];
	var noun5 = document.getElementById("noun5")
	noun5.innerHTML = model.nouns[model.randomArrOne[5]];
	var noun6 = document.getElementById("noun6")
	noun6.innerHTML = model.nouns[model.randomArrOne[6]];
	var noun7 = document.getElementById("noun7")
	noun7.innerHTML = model.nouns[model.randomArrOne[7]];
	var noun8 = document.getElementById("noun8")
	noun8.innerHTML = model.nouns[model.randomArrOne[8]];
	var noun9 = document.getElementById("noun9")
	noun9.innerHTML = model.nouns[model.randomArrOne[9]];	
	
	var verb0 = document.getElementById("verb0")
	verb0.innerHTML = model.verbs[model.randomArrTwo[0]];
	var verb1 = document.getElementById("verb1")
	verb1.innerHTML = model.verbs[model.randomArrTwo[1]];
	var verb2 = document.getElementById("verb2")
	verb2.innerHTML = model.verbs[model.randomArrTwo[2]];
	var verb3 = document.getElementById("verb3")
	verb3.innerHTML = model.verbs[model.randomArrTwo[3]];
	var verb4 = document.getElementById("verb4")
	verb4.innerHTML = model.verbs[model.randomArrTwo[4]];
	var verb5 = document.getElementById("verb5")
	verb5.innerHTML = model.verbs[model.randomArrTwo[5]];
	var verb6 = document.getElementById("verb6")
	verb6.innerHTML = model.verbs[model.randomArrTwo[6]];
	var verb7 = document.getElementById("verb7")
	verb7.innerHTML = model.verbs[model.randomArrTwo[7]];
	var verb8 = document.getElementById("verb8")
	verb8.innerHTML = model.verbs[model.randomArrTwo[8]];
	var verb9 = document.getElementById("verb9")
	verb9.innerHTML = model.verbs[model.randomArrTwo[9]];
	
	}
};

window.onload = init;

function init() {
	
	controller.randomWordOrderOne();
	controller.randomWordOrderTwo();
	view.display();
	var finishButton = document.getElementById("finishButton");
	finishButton.onclick = controller.finishLines;
	var copyButton = document.getElementById("copyButton");
	copyButton.onclick = view.copyLines;
}