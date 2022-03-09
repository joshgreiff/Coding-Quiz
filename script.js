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
        c: "JavaScript Object Notation",
        d: "Jesus Slept On Naptime",
        correct: "c"
    },
    {
        question: "What special characters are used to define an object in JavaScript",
        a: "{}",
        b: "[]",
        c: "()",
        d: "69",
        correct: "a"
    },
    {
        question: "How late did I stay up working on this?",
        a: "midnight",
        b: "4am",
        c: "its 5:38 am and still going strong",
        d: "2am",
        correct: "c"
    },
    {
    }

    
];
var body = document.getElementById('body');
var quizEl = document.getElementById('inner-div');
var originalHTML = document.getElementById('inner-div').innerHTML
var countdownDisplay = document.createElement("div");
var questionEl = document.getElementById('question-text');
var aEl = document.getElementById('choice-a-text');
var bEl = document.getElementById('choice-b-text');
var cEl = document.getElementById('choice-c-text');
var dEl = document.getElementById('choice-d-text');
var currentQuestion = 0;
var currentCorrect = "";
var highScoreList = document.getElementById('highScores');
var highScore1 = document.getElementById('score1');
var score = 0;
var highscore = localStorage.getItem("highscore", score);

if(highscore){
    highScore1 = document.createElement("li");
    highScore1.textContent = " High Score: "+highscore;
    highScoreList.appendChild(highScore1);
}

startQuiz = function(){

    
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

    
    uncheckRadios = function(){
        document.getElementById('choice-a').checked = false
        document.getElementById('choice-b').checked = false
        document.getElementById('choice-c').checked = false
        document.getElementById('choice-d').checked = false
    }
        
        
            questionEl.textContent = quizData[0].question;
            aEl.textContent = quizData[0].a;
            bEl.textContent = quizData[0].b;
            cEl.textContent = quizData[0].c;
            dEl.textContent = quizData[0].d;   
        

            checkAnswer = function(){     

                if(document.getElementById('choice-a').checked){
                    currentCorrect = "a"
                }
                else if(document.getElementById('choice-b').checked){
                    currentCorrect = "b"
                }
                else if(document.getElementById('choice-c').checked){
                    currentCorrect = "c"
                }
                else if(document.getElementById('choice-d').checked){
                    currentCorrect = "d"
                }
    
                if(currentCorrect == quizData[currentQuestion].correct){
                    window.alert("Correct!")
                    console.log("correct")
                    uncheckRadios();
                    currentQuestion++;
                    score++;
                    if(currentQuestion === 4){
                        window.alert("You are done!")
                        loadEndScreen();
                    }
                }
                else if(currentCorrect != quizData[currentQuestion].correct){
                    window.alert("Incorrect!")
                    console.log("incorrect")
                    uncheckRadios();
                    currentQuestion++;
                    if(currentQuestion === 4){
                        window.alert("You are done!")
                        loadEndScreen();
                    }
                }
                questionEl.textContent = quizData[currentQuestion].question;
                aEl.textContent = quizData[currentQuestion].a;
                bEl.textContent = quizData[currentQuestion].b;
                cEl.textContent = quizData[currentQuestion].c;
                dEl.textContent = quizData[currentQuestion].d; 
                
                
            };
            
            reloadFunction = function(){
                location.reload();
            }
    
            loadEndScreen = function(){
                    quizEl.innerHTML = "<h3>Thank You For Participating In The Madness, If You Had Fun, Give Me A Kiss</h3><h4>Your score was "+ score +"</h4><button type='button' id='startBtn'>PLAY AGAIN</button>"

                    if(score > localStorage.getItem("highscore")){
                        localStorage.setItem("highscore", score);
                    }
                    
                
                    
                    startBtn.addEventListener("click" , reloadFunction)
                }
       
             

            
            confirmBtn.addEventListener("click",checkAnswer);
       


        


        if(window.confirm("Welcome To The Ultimate Test Of Coding Knowledge In The Universe, would you like to begin? you will have 75 seconds to complete the quiz.")){
        startQuiz();
        }




// loadStartScreen = function(){
//     quizEl1.innerHTML = "<h3>Welcome To The Ultimate Coding Quiz Of Glory</H3> <h4>You will have 60 seconds to complete the quiz</h4><button type='button' id='startBtn'>START QUIZ</button>"


//     startBtn.addEventListener("click",startQuiz);

// }
// loadStartScreen();










