// Javascript Object-Oriented Programming Questions
const questions = [
  {
    question: "What is JavaScript OOP?",
    options: ["Algorithmic style", "Object-oriented paradigm", "Exclusive front-end method", "Asynchronous technique"],
    correctAnswer: "Object-oriented paradigm"
  },
  {
    question: "What is a constructor function in JavaScript?",
    options: ["A function that constructs DOM elements", "A function that initializes object instances", "A function for mathematical calculations", "A function that handles asynchronous operations"],
    correctAnswer: "A function that initializes object instances"
  },
  {
    question: "What is encapsulation in OOP?",
    options: ["A process of sealing an object's properties", "A way to hide implementation details and expose only necessary features", "A technique for compressing data", "A method for handling errors in the code"],
    correctAnswer: "A way to hide implementation details and expose only necessary features"
  },
  {
    question: "What does the term 'prototype' refer to in JavaScript?",
    options: ["A design pattern for creating objects", "A built-in object used for inheritance", "A way to declare variables", "A tool for debugging asynchronous code"],
    correctAnswer: "A built-in object used for inheritance"
  },
  {
    question: "What is the 'this' keyword in JavaScript?",
    options: ["A keyword used to reference the current object", "A reserved word for defining variables", "A tool for handling exceptions", "A method for sorting arrays"],
    correctAnswer: "A keyword used to reference the current object"
  },
  {
    question: "What is polymorphism in OOP?",
    options: ["A technique for optimizing code execution", "A method for creating dynamic HTML elements", "A way to achieve multiple forms or behaviors with a single function or object", "A process for converting data types"],
    correctAnswer: "A way to achieve multiple forms or behaviors with a single function or object"
  },
  {
    question: "How is inheritance implemented in JavaScript?",
    options: ["Using the 'extends' keyword", "By including external libraries", "Through the use of global variables", "By using HTML tags"],
    correctAnswer: "Using the 'extends' keyword"
  },
  {
    question: "What is a getter and setter in JavaScript?",
    options: ["Functions for getting and setting DOM properties", "Methods for retrieving and modifying object properties", "Keywords for importing external modules", "Functions for handling AJAX requests"],
    correctAnswer: "Methods for retrieving and modifying object properties"
  },
  {
    question: "What is a class in JavaScript?",
    options: ["A group of related functions", "A template for creating objects", "A type of HTML element", "A keyword for defining arrays"],
    correctAnswer: "A template for creating objects"
  },
  {
    question: "What is the difference between 'let' and 'const' when declaring class properties?",
    options: ["'let' is used for private properties, 'const' for public properties", "'let' can be reassigned, 'const' cannot be reassigned", "'const' is used for static properties, 'let' for instance properties", "'let' is used for method declarations, 'const' for property declarations"],
    correctAnswer: "'let' can be reassigned, 'const' cannot be reassigned"
  },
  {
    question: "What is the 'super' keyword in JavaScript?",
    options: ["A keyword for creating subclasses", "A method for calling the parent class constructor", "A tool for handling asynchronous code", "A way to define global variables"],
    correctAnswer: "A method for calling the parent class constructor"
  },
  {
    question: "What is method chaining in JavaScript?",
    options: ["A technique for linking external libraries", "A way to call multiple methods on an object in a single line", "A process for handling HTTP requests", "A method for creating event listeners"],
    correctAnswer: "A way to call multiple methods on an object in a single line"
  },
  {
    question: "Explain the concept of 'composition' in OOP.",
    options: ["A process of combining simple objects to create more complex ones", "A method for adding elements to an array", "A way to define global functions", "A technique for optimizing code execution"],
    correctAnswer: "A process of combining simple objects to create more complex ones"
  },
  {
    question: "What is the difference between 'classical inheritance' and 'prototypal inheritance' in JavaScript?",
    options: ["Classical inheritance is used in frontend development, prototypal inheritance in backend development", "Prototypal inheritance relies on prototypes, classical inheritance relies on classes", "Classical inheritance is the modern approach, prototypal inheritance is outdated", "Prototypal inheritance is more efficient than classical inheritance"],
    correctAnswer: "Prototypal inheritance relies on prototypes, classical inheritance relies on classes"
  },
  {
    question: "What is the purpose of the 'instanceof' operator in JavaScript?",
    options: ["To check if an object is an instance of a specific class", "To concatenate two strings", "To compare two objects for equality", "To create a new instance of an object"],
    correctAnswer: "To check if an object is an instance of a specific class"
  },
  {
    question: "What is a mixin in JavaScript?",
    options: ["A way to define class properties", "A type of loop for iterating over objects", "A function for sorting arrays", "A set of methods that can be easily shared among different classes"],
    correctAnswer: "A set of methods that can be easily shared among different classes"
  },
  {
    question: "Explain the concept of 'abstraction' in OOP.",
    options: ["A process of simplifying complex systems by modeling classes appropriate to the problem", "A method for creating dynamic HTML elements", "A technique for optimizing database queries", "A way to declare variables"],
    correctAnswer: "A process of simplifying complex systems by modeling classes appropriate to the problem"
  },
  {
    question: "What is the 'new' keyword used for in JavaScript?",
    options: ["To create a new instance of a class", "To declare a constant variable", "To define a function", "To handle asynchronous operations"],
    correctAnswer: "To create a new instance of a class"
  },
  {
    question: "How does JavaScript handle private members in a class?",
    options: ["By using the 'private' keyword", "By convention (using underscores) and closures", "By declaring them with 'let' keyword", "By encapsulating them in a separate module"],
    correctAnswer: "By convention (using underscores) and closures"
  },
  {
    question: "What is the role of the 'static' keyword in a class declaration?",
    options: ["To create static methods that can be called without creating an instance of the class", "To define properties that cannot be changed", "To indicate that the class is immutable", "To make a class abstract"],
    correctAnswer: "To create static methods that can be called without creating an instance of the class"
  },
  {
    question: "What is the difference between 'call' and 'apply' in JavaScript?",
    options: ["They are interchangeable and can be used in any context", "'call' is used for functions with a fixed number of arguments, 'apply' for functions with a variable number of arguments", "'apply' is used for functions with a fixed number of arguments, 'call' for functions with a variable number of arguments", "'call' is specific to arrow functions, 'apply' to regular functions"],
    correctAnswer: "'call' is used for functions with a fixed number of arguments, 'apply' for functions with a variable number of arguments"
  },
  {
    question: "What is the purpose of the 'Reflect' object in JavaScript?",
    options: ["To manipulate HTML elements", "To handle exceptions in asynchronous code", "To provide methods for interceptable JavaScript operations", "To create dynamic CSS styles"],
    correctAnswer: "To provide methods for interceptable JavaScript operations"
  },
  {
    question: "Explain the concept of 'method overriding' in JavaScript.",
    options: ["A technique for preventing the modification of object properties", "A process of creating multiple methods with the same name in a class hierarchy", "A method for extending the length of an array", "A way to add event listeners to DOM elements"],
    correctAnswer: "A process of creating multiple methods with the same name in a class hierarchy"
  },
  {
    question: "What is the purpose of the 'Object.create()' method in JavaScript?",
    options: ["To create a new instance of a class", "To clone an object without copying its properties", "To check if an object is empty", "To define a new object literal"],
    correctAnswer: "To create a new object with the specified prototype object and properties"
  },
  {
    question: "How does JavaScript handle method overloading?",
    options: ["It automatically determines the correct method based on the number of arguments", "It does not support method overloading", "By using the 'overload' keyword", "By declaring multiple methods with the same name and different parameter types"],
    correctAnswer: "It does not support method overloading"
  },
  {
    question: "What is the role of the 'Symbol' data type in JavaScript?",
    options: ["To represent numerical values", "To create unique object properties", "To handle string manipulation", "To define the structure of a class"],
    correctAnswer: "To create unique object properties"
  },
  {
    question: "Explain the concept of 'constructor chaining' in JavaScript.",
    options: ["A technique for creating circular references between objects", "A way to call the constructor of the superclass in a subclass", "A method for converting strings to numbers", "A process of creating instances without using the 'new' keyword"],
    correctAnswer: "A way to call the constructor of the superclass in a subclass"
  },
  {
    question: "What is the 'Object.freeze()' method used for in JavaScript?",
    options: ["To prevent the addition of new properties to an object", "To convert an object into a frozen dessert", "To remove all properties from an object", "To freeze the execution of a function"],
    correctAnswer: "To prevent the addition of new properties to an object"
  },
  {
    question: "How does JavaScript handle the 'this' context in arrow functions?",
    options: ["Arrow functions have their own 'this' context", "'this' in arrow functions refers to the global object", "Arrow functions automatically bind 'this' to the enclosing lexical context", "Arrow functions cannot use 'this'"],
    correctAnswer: "Arrow functions automatically bind 'this' to the enclosing lexical context"
  },
  {
    question: "What is the purpose of the 'getPrototypeOf()' method in JavaScript?",
    options: ["To retrieve the prototype of an object", "To set the prototype of an object", "To check if an object has a specific prototype", "To define the constructor of an object"],
    correctAnswer: "To retrieve the prototype of an object"
  },
  {
    question: "What is the concept of 'delegation' in JavaScript?",
    options: ["A way to assign tasks to external functions", "A process for handling event propagation", "A design pattern where an object passes responsibility for a task to another object", "A method for dynamic CSS styling"],
    correctAnswer: "A design pattern where an object passes responsibility for a task to another object"
  },
  {
    question: "Explain the role of 'Async/Await' in object-oriented programming with JavaScript.",
    options: ["To handle asynchronous operations in a more synchronous manner", "To create new instances of objects asynchronously", "To define abstract classes", "To override methods in a subclass"],
    correctAnswer: "To handle asynchronous operations in a more synchronous manner"
  },
  {
    question: "What is the purpose of the 'bind()' method in JavaScript?",
    options: ["To create a shallow copy of an object", "To explicitly set the value of 'this' for a function", "To concatenate two arrays", "To create an immutable object"],
    correctAnswer: "To explicitly set the value of 'this' for a function"
  },
];

// Shuffle function, Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
if (array[i].options) {
// Shuffle answer options if present
shuffleArray(array[i].options);
}
}
};

shuffleArray(questions);

const quizContainer = document.getElementById('quiz-container');
const questionBox = document.getElementById('question-box');
const answerButtons = document.getElementsByClassName('answer-box');
const plusThree = document.getElementById('green-plus');
const minusFive = document.getElementById('red-minus');
const finalScore = document.getElementById('final-score');
const finalTime = document.getElementById('final-time');
const secs = document.getElementById('secs');
const endMessage = document.getElementById('end-message');
const endMessage1 = document.getElementById('end-message1');

let currentQuestionIndex = 0;
let count = 0;

// Load current question and options
const loadQuestion = () => {
const currentQuestion = questions[currentQuestionIndex];

// Display question
questionBox.textContent = currentQuestion.question;

// Remove existing event listeners on answer buttons
Array.from(answerButtons).forEach((button) => {
button.removeEventListener('click', checkAnswer);
});

// Display answer options
Array.from(answerButtons).forEach((button, i) => {
button.textContent = currentQuestion.options[i];
// Add event listener
button.addEventListener('click', checkAnswer);
});
};

// Check selected answer
const checkAnswer = (event) => {
const selectedAnswer = event.target.textContent;
const correctAnswer = questions[currentQuestionIndex].correctAnswer;

// Check selected answer is correct
if (selectedAnswer === correctAnswer) {
count++;
timerDuration += 3;
plusThree.style.display = 'block';
setTimeout(() => {
plusThree.style.display = 'none';
}, 500);

} else {
timerDuration -= 6;
minusFive.style.display = 'block';
setTimeout(() => {
minusFive.style.display = 'none';
}, 500);
};

// Move to next question
currentQuestionIndex++;

// Check if there are more questions
if (currentQuestionIndex < questions.length) {
loadQuestion();
} else {
// Congratulations end quiz
clearInterval(timer); // Stop the timer
endContainer.style.display = "block";
quizContainer.style.display = "none";
secs.style.display = "block";
finalScore.textContent = count;
finalTime.textContent = timerDuration; 
endMessage.innerText = "Congratulations!";
endMessage1.innerText = "You've Completed all 33 questions!";
}
};

const timerElement = document.getElementById('timer');
let timer;
let timerDuration = 44; // Initial timer duration in seconds

// Update and display timer
function updateTimer() {
const minutes = Math.floor(timerDuration / 60);
const seconds = timerDuration % 60;
timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
updateTimerColor()
};

// Start timer
function startTimer() {
timer = setInterval(function () {
if (timerDuration > 0) {
timerDuration--;
updateTimer();
} else {
// Time is up, end the quiz
clearInterval(timer); // Stop the timer
endContainer.style.display = "block";
quizContainer.style.display = "none"; 
// Display final score and time
finalScore.textContent = count;
finalTime.textContent = timerDuration;
endMessage.innerText = "Out of Time!"
endMessage1.innerText = "";
secs.style.display = "none";
}
}, 1000);
count = 0;
};

// 3, 2, 1 timer red function
function updateTimerColor() {
if (timerDuration <= 5 && timerDuration >= 0) {
timerElement.classList.add("text-red-500", "brightness-125");
} else {
timerElement.classList.remove("text-red-500", "brightness-125");
}
};

// Reset timer
function resetTimer() {
clearInterval(timer);
timerDuration = 44; // Reset the timer duration
updateTimer();
};

// Reset quiz and timer
function resetQuiz() {
currentQuestionIndex = 0;
count = 0;
shuffleArray(questions);
loadQuestion();
resetTimer(); // Reset the timer when resetting the quiz
};

// AUDIO
const audio = document.querySelector('audio');
const audioOn = document.getElementById('audioOn');
const audioOff = document.getElementById('audioOff');

// Turn audio off
audioOn.addEventListener('click', () => {
audioOn.style.display = "none";
audioOff.style.display = "block";
audio.pause();
});

// Turn audio on
audioOff.addEventListener('click', () => {
audioOn.style.display = "block";
audioOff.style.display = "none";
audio.play();
});

// Instructions

// Welcome

const welcomeContainer = document.getElementById('welcome-container');
const welcomeNext = document.getElementById('welcome-next');

welcomeNext.addEventListener('click', () => {
audioOn.style.display = "block";
audioOff.style.display = "none";
welcomeContainer.style.display = "none";
instruction1Container.style.display = "block";
});

// Instruction 1
const instruction1Container = document.getElementById('instruction1-container');
const instruction1Next = document.getElementById('instruction1-next');
const instruction1Previous = document.getElementById('instruction1-previous');

instruction1Next.addEventListener('click', () => {
instruction1Container.style.display = "none";
instruction2Container.style.display = "block";
});

instruction1Previous.addEventListener('click', () => {
instruction1Container.style.display = "none";
welcomeContainer.style.display = "block";
});

// Instruction 2

const instruction2Container = document.getElementById('instruction2-container');
const instruction2Next = document.getElementById('instruction2-next');
const instruction2Previous = document.getElementById('instruction2-previous');

instruction2Next.addEventListener('click', () => {
instruction2Container.style.display = "none";
startContainer.style.display = "block";
});

instruction2Previous.addEventListener('click', () => {
instruction2Container.style.display = "none";
instruction1Container.style.display = "block";
});

// Start container

const startContainer = document.getElementById('start-container');
const startNext = document.getElementById('start-next');
const startPrevious = document.getElementById('start-previous');

startNext.addEventListener('click', () => {
startContainer.style.display = "none";
quizContainer.style.display = "block";
loadQuestion(); // Initial load of the first question and start timer
updateTimer(); // Display initial timer value
startTimer(); // Start the timer
});

startPrevious.addEventListener('click', () => {
startContainer.style.display = "none";
instruction2Container.style.display = "block";
});

// End Quiz

const endContainer = document.getElementById('end-container');
const endNext = document.getElementById('end-next');

endNext.addEventListener('click', () => {
startContainer.style.display = "block";
endContainer.style.display = "none";
resetQuiz();
});
