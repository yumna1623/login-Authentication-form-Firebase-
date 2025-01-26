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
  
  const onPressNext = () => {
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
  };

  const onPressBack = ()=> {

    if(index>0){
        index--;
        loadQuestions()
    }
  }
  
  loadQuestions();