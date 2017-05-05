var q = require("./q.json");

var Flashcard = function(question, answer){
	this.question = question,
	this.answer = answer
};

var study = [];
var q1 = new Flashcard (q.q1, q.a1);
var q2 = new Flashcard (q.q2, q.a2);
var q3 = new Flashcard (q.q3, q.a3);
var q4 = new Flashcard (q.q4, q.a4);

study.push(q1, q2, q3, q4)

module.exports = study;