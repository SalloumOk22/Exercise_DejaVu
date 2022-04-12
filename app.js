//Exercise DejaVu
console.log("Exercise_DejaVu");


//1 Welcome and insrtuctions
// // a.Setup gme:generate a random number
//2 Ask user to input a number
//3 Evaluate the number
//4 Give feedback
//5 Repeat 3-5 until correct
//6 End the Game



alert ("Welcome! This is a Number Guessing Game. \n\nTo play, guess number between 1 to 100.");

//game Values/SET UP
let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);
let guess;

///GAME PLAY
do{
  guess = prompt("Guess a number between 1 and 100:\n[Enter] to continue."); 
  
  //let guess quit game
  if (guess.toLowerCase() == "quit"){
      alert("Goodbye! Thanks for playin.");
      break;
  } 
 //Evaluating ansver and give feedback
  if (guess > answer) {
      alert(`${guess} is to high!`);
  } else if (guess < answer) {
      alert(`${guess} is to low!`);
  } else  {
      alert(`${guess} is correct!`);
  }
} while (answer != guess)



////MINE CODE

let rand = Math.floor(Math.random() * 100) + 1;


function getRandomInt() {
    return Math.floor(Math.random() * 100) + 1;
  }

 ////////  var answer
  prompt ("Input number!");
 
function inputNumber  () 
{  
  if (myGuess === randomNumber)
    {feedback.textContent = "You got it right!"}
  else if(myGuess > randomNumber)
    {feedback.textContent = "Your guess was " + myGuess + ". That's too high. Try Again!"}
  else if(myGuess < randomNumber)
    {feedback.textContent = "Your guess was " + myGuess + ". That's too low. Try Again!"}
}
  
  console.log(getRandomInt(10));
  // expected output: 0, 1 or 2
  
  console.log(getRandomInt(20));
  // expected output: 0
  
  console.log(Math.random());
  // expected output: a number from 0 to <1




  //OTHER FUNCTION



  function startGame(){
//introduction
alert("welcome to the Guessing Game! You will be guessing random number.\nDo you have what it takes?\n\n[Enter] to continue.");

//SET UP
let answer;
let difficulty = determineDifficulty();
//determine difficulty
  }

  function playGame(){

  }

  function endGame(){

  }

  function determineDifficulty () {
      let difficulty = prompt(
          "Type your difficulty:\n\nEasy\nMedium\nHard\n\n[Enter] to continue.").toLowerCase();
    let difficultyPresets = ["easy","medium","hard"];
    if (difficultyPresets.includes(difficulty)){
        return difficulty;
    }else {
        return determineDifficulty();
    }
  }




  //////////

  let a = 10;
  let b = a;

  function add(x, y) {
    x +=y;
  }

  console.log(add(a, b));



  let ben = {
    score:10,
  };
  let seth = ben;
  ben.score +=10;
  
  console.log(ben.score);
  console.log(seth.score);


  function sum(a, b) {
    a.score +=b.score;
  }

  sum(ben, seth);

  console.log(ben.score);
  console.log(seth.score);