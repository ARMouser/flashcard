var flash = require("./card.js");
var inquirer = require("inquirer");
var count = 0;

inquire(count)

function inquire(z) {
	if (count <= 3)
	{
		inquirer.prompt([
		{
			name: 'front',
			message: flash[z].question
		}
		]).then(function(answers){
			if (answers.front === flash[z].answer) {
				console.log("You're Right!")
				count ++ 
				inquire(count)
			} else {
				console.log("Sorry, it was " + flash[z].answer)
				count ++
				inquire(count)
			}
		})
	} else {
		inquirer.prompt([
		{
			name: 'newg',
			message: 'Start Over??'
		}
		]).then(function(answers){
			if (answers.newg === "Yes") {
				count = 0;
				inquire(count)
			} else {
				console.log("That's probably enough for one night")
			}
		})
	}
};