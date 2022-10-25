var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log("Welcome " + userName + " to HOW MUCH DO YOU KNOW Vardhan");
var score = 0;


function details(question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log('Right!');
    score ++;
    console.log('Your score:',score);
  }
  else{
    console.log('Wrong!');
    console.log('Your score:',score);
  }
}

//array of objects
var vardhanDetails = [
  {
    question: 'Where do I live? ',
    answer: 'vizag',
  },
  {
    question: 'What is my favourite colour? ',
    answer: 'black',
  },
  {
    question: 'How much old am I? ',
    answer: '23',
  },
  {
    question: 'What is my favourite sport? ',
    answer: 'cricket',
  },
  {
    question: 'What is my favourite travel destination would be? ',
    answer: 'uttarakhand',
  }];

//Looping 
for (var i = 0; i < vardhanDetails.length; i++){
  var currentQuestion = vardhanDetails[i];
  details(currentQuestion.question, currentQuestion.answer);//function call
}
console.log('Your Final Score is: ',score);

//Highscores data
var scores = [
  {
    name: 'vardhan',
    score: '5',
  },
  {
    name: 'ravi teja',
    score: '4',
  }
];

function compare(highScore){
  var currentUserScore = score;
  if (currentUserScore >= highScore){
    console.log('Congratulations!! You have beaten the high score');
  }
  else{
    console.log('The high score is: ', highScore);
  }
}

var highScore = 0;
for (var i = 0; i < scores.length; i++){
  if(scores[i].score > highScore) {
    highScore = scores[i].score;
  }  
}

compare(highScore);

