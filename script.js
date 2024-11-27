const questions = [
    {
        question: "What is Naruto's dream in the anime Naruto?",
        answers: [
           {text:"To become the richest person in the world" , correct: false},
           {text:"To become the Hokage " ,correct: true},
           {text:"To learn every jutsu" , correct: false},
           {text:"To defeat all enemies", correct: false}
        ]
    },
    {
        question: "In Dragon Ball Z, what color is Goku’s Super Saiyan hair?",
        answers: [
           {text:"Blue" , correct: false},
           {text:"Yellow" ,correct: true},
           {text:"Red" , correct: false},
           {text:"Black", correct: false}
        ]
    },
    {
        question: "What is the name of Luffy's pirate crew in One Piece?",
        answers: [
           {text:"Blackbeard Pirates" , correct: false},
           {text:"Straw Hat Pirates" ,correct: true},
           {text:"Whitebeard Pirates" , correct: false},
           {text:"Big Mom Pirates", correct: false}
        ]
    },
    {
        question: "Who is the main rival of Ash Ketchum in the original Pokémon series?",
        answers: [
           {text:"Gary Oak " , correct: true},
           {text:"Brock" ,correct: false},
           {text:"Misty" , correct: false},
           {text:"James", correct: false}
        ]
    },
    {
        question: "In Attack on Titan, what is Eren Yeager’s main goal?",
        answers: [
           {text:"To destroy all Titans" , correct: true},
           {text:"To find his missing family" ,correct: false},
           {text:"To rule the kingdom" , correct: false},
           {text:"To become a soldier", correct: false}
        ]
    },
    {
        question: "In Death Note, what is the real name of Kira?",
        answers: [
           {text:"Light Yagami " , correct: true},
           {text:"L Lawliet" ,correct: false},
           {text:"Ryuk" , correct: false},
           {text:"Misa Amane", correct: false}
        ]
    },
    {
        question: "Which Studio Ghibli movie features a bathhouse for spirits?",
        answers: [
           {text:"My Neighbor Totoro" , correct: false},
           {text:"Spirited Away" ,correct: true},
           {text:"Howl’s Moving Castle" , correct: false},
           {text:"Princess Mononoke", correct: false}
        ]
    },
    {
        question: "In Demon Slayer, what is Tanjiro Kamado’s sister’s name?",
        answers: [
           {text:"Mitsuri" , correct: false},
           {text:"Nezuko " ,correct: true},
           {text:"Kanao" , correct: false},
           {text:"Shinobu", correct: false}
        ]
    },


]


let questionElement = document.getElementById("question")
let answerButtons = document.getElementById("answer-buttons")
let nextButton = document.getElementById("next-btn")
let exitButton = document.getElementById("exit-btn")

let currentQuestionIndex = 0
let score = 0

function startQuiz () {
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML="Next"
    showQuestion();
}

function showQuestion () {
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNumber=currentQuestionIndex + 1; //As 0th Question is 1st Question
    questionElement.innerHTML=questionNumber + ". " + currentQuestion.question;

    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text
        button.classList.add("btn");
        answerButtons.appendChild(button)
        if(answer.correct)
        {
            button.dataset.correct=answer.correct
        }
        //Now setting Event Listener For the Buttons
        button.addEventListener("click",selectAnswer)
               
    });
    

}

function resetState () {
 nextButton.style.display="none"
 exitButton.style.display="none"
 while(answerButtons.firstChild)
 {
    answerButtons.removeChild(answerButtons.firstChild)
 }
}

function selectAnswer (e) {
    const selectedBtn = e.target
    if(selectedBtn.dataset.correct==="true")
    {
        selectedBtn.classList.add("correct")
        score++
    }
    else{
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct)
        {
            button.classList.add("correct")
        }
        button.disabled="true"

    })
    nextButton.style.display="block";


    }


function handleNextButton() {
   currentQuestionIndex++;
   if(currentQuestionIndex < questions.length){
       
       showQuestion();
   }
   else{
     showScore()
   }
}


function showScore () {
    resetState()
    questionElement.innerHTML=`Your Score is:${score} out of ${questions.length}!`
    nextButton.innerHTML="Play Again"
    nextButton.style.display="block"
    exitButton.style.display="block"

}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length)
    {
         handleNextButton()
    }
    else{
        startQuiz()
    }
})


startQuiz ()

