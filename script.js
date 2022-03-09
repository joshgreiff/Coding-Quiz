const quizData = [
    {
        question: "How many dogs in a boat?",
        a: "5",
        b: "b",
        c: "eleventy",
        d: "this is the correct answer",
        correct: "d"
    },
    {
        question: "What does JSON stand for?",
        a: "JavaScript Open Naming",
        b: "Just So Obviously Nacho",
        C: "JavaScript Object Notation",
        d: "Jesus Slept On Naptime",
        correct: "d"
    }
    

    
];

var body = document.getElementById('body');
var quizEl = document.getElementById('inner-div');
var originalHTML = document.getElementById('inner-div').innerHTML
var countdownDisplay = document.createElement("div");

// when the page loads, the inner HTMl is changed to display the start screen
loadStartScreen = function(){
    quizEl.innerHTML = "<h3>Welcome To The Ultimate Coding Quiz Of Glory</H3> <h4>You will have 60 seconds to complete the quiz</h4><button type='button' id='startBtn'>START QUIZ</button>"


    startBtn.addEventListener("click",startQuiz);

}
window.addEventListener("load",loadStartScreen);

// When the user clicks start, the inner HTML returns to the question format, and the timer begins
startQuiz = function(){
    quizEl.innerHTML = document.getElementById('inner-div').innerHTML = originalHTML
    
    var timeRemaining = 75;

    decreaseTimer = function(){
        
        if(timeRemaining > 1){
            countdownDisplay.textContent = timeRemaining + " seconds remaining";
            timeRemaining --;
        }
        else if(timeRemaining === 1){
            countdownDisplay.textContent = timeRemaining + " second remaining";
            timeRemaining --;
        }
        else if(timeRemaining === 0){
            countdownDisplay.textContent = "You are out of time!"
            // break;
        }
    };
    setInterval(decreaseTimer, 1000);
    quizEl.appendChild(countdownDisplay);
     
}




changeQuestion = function(){
    console.log("hi")
}


confirmBtn.addEventListener("click", changeQuestion)


