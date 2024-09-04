const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        answers: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        answers: ["Joe Biden", "Donald Trump", "Barack Obama", "George Bush"],
        answer: "Joe Biden",
    },{
        question: "What does HTML stand for?",
        answers: ["Hypertext Markup Language", "Cascading Style Sheet", "Jason Object Notation", "Helicopters Terminals Motorboats Lamborginis"],
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        answers: ["1996", "1995", "1994", "none of the above"],
        answer: "1995",

    }
]

const question = document.querySelector('.quesion');

const answers = document.querySelectorAll('.answer-in');

const submit = document.querySelector('.submit');


const setText = function(num){
    const currentEl = quiz[num];
    question.textContent = currentEl.question;

    answers.forEach((ans,i)=>{
        ans.nextElementSibling.textContent = currentEl.answers[i];
    })

}

setText(0);

let currentScore = 0;
let quesionNum = 0;

submit.addEventListener('click',()=>{

    const inputEl = document.querySelector('li input[type="radio"]:checked')

    if(!inputEl) return alert('Select the answer');

    const getAnswer = inputEl.nextElementSibling.textContent;

    if(getAnswer === quiz[quesionNum].answer) currentScore++;

    quesionNum++;

    if(quesionNum < quiz.length){

        setText(quesionNum);
        inputEl.checked = false;
    }
    else{
        alert(`You have scored ${currentScore}/${quiz.length}`)
        quesionNum = 0;
        setText(quesionNum);
        inputEl.checked = false;
    }

    
})

// quiz.forEach((el,i)=>{
//     const getAnswer = document.querySelector('inp');    
// })