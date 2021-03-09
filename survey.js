const readline = require('readline');

const questions = [
  "What's your name? Nicknames are also acceptable  ",
  "What's an activity you like doing?  ",
  "What do you listen to while doing that?  ",
  "Which meal is your favourite(eg: dinner, brunch, etc.)  ",
  "What's your favourite thing to eat for that meal?  ",
  "Which sport is your absolute favourite?  ",
  "What is your superpower? In a few words, tell us what you are amazing at!  "
];

const answers = [];
let i = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const asker = (answer) => {
  answers.push(answer);
  //console.log(`Thank you for your valuable feedback: ${answer}`);
  i++;
  if (i < questions.length) {//next question
    rl.question(questions[i], asker);
  }
  else {//base case
    rl.close();
    console.log(`\n${answers[0]} loves ${answers[1]} and listening to ${answers[2]}. Most of 
${answers[0]}'s meals consist of ${answers[3]} because it's clearly has the best food, ${answers[4]}! ${answers[5]} 
is always fun and it's a lot easier with the power of ${answers[6]}.`);
  };
};

rl.question(questions[i], asker);
