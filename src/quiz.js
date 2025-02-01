import {
  getDatabase,
  ref,
  onChildAdded,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
const database = getDatabase();

const auth = getAuth();
const userId = auth;
const userArr = [];

const usersRef = ref(database, "users/");
onChildAdded(usersRef, (snapshot) => {
  const data = snapshot.val();
  userArr.push(data);
  console.log(userArr);
});

const data = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High TI Mar Lan",
      "Hyper Text Markup Learn",
    ],
    correct: "Hyper Text Markup Language",
  },
  {
    question: "What does CSS stand for?",
    options: ["Com Sci", "Cascading Style Sheet", "Cas Cad Count"],
    correct: "Cascading Style Sheet",
  },
  {
    question: "What the best programming language?",
    options: ["javascript", "c++ ", "python", "java"],
    correct: "javascript",
  },
];

let index = 0;
let score = 0;

const loadQuestions = () => {
  const question = document.getElementById("question");
  const Ans = document.getElementById("Ans");
  question.innerText = data[index].question;

  Ans.innerHTML = "";

  data[index].options.forEach(function (item, i) {
    const options = `<input type="radio" id=option-${i} name="options" value="${item}">
                    <label for=option-${i}>${item}</label> <br>`;
    Ans.innerHTML += options;
  });
};


const btnNext = document.getElementById("btnNext");
btnNext.addEventListener("click",()=>{
  const selectedValue = document.querySelector(
    'input[name="options"]:checked'
  ).value;

  if (selectedValue == data[index].correct) {
    score++;
  }

  if (index < data.length - 1) {
    index++;
    loadQuestions();
  }

  const scoreElement = document.getElementById("score");
  scoreElement.innerText = `Score: ${score}`;

})


const btnBack = document.getElementById("btnBack");
btnBack.addEventListener("click",()=>{
  onPressBack();
})
const onPressBack = () => {
  if (index > 0) {
    index--;
    loadQuestions();
  }
};

loadQuestions();
