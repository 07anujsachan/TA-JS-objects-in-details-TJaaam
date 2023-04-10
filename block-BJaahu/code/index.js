function question(title, option, correctAnswerIndex) {
    let ques = Object.create(quesMethods);
    ques.title = title;
    ques.option = option;
    ques.correctAnswerIndex = correctAnswerIndex;
    return ques;
  }
  let quesMethods = {
    isAnswerCorrect(index) {
      return index === ques.correctAnswerIndex;
    },
    getCorrectAnswer() {
      return ques.option[correctAnswerIndex];
    },
  };
  // pseudoclassical method
  
  function Question(title, option, correctAnswerIndex) {
    this.title = title;
    this.option = option;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  Question.prototype = {
    isAnswerCorrect(index) {
      return index === this.correctAnswerIndex;
    },
    getCorrectAnswer() {
      return this.option[this.correctAnswerIndex];
    },
  };
  
  // class method
  
  class Question {
    constructor(title, option, correctAnswerIndex) {
      this.title = title;
      this.option = option;
      this.correctAnswerIndex = correctAnswerIndex;
    }
    isAnswerCorrect(index) {
      return index === this.correctAnswerIndex;
    }
    getCorrectAnswer() {
      return this.option[this.correctAnswerIndex];
    }
  }
  
  let firstQuestion = new Question(
    "Where is the capital of Jordan",
    ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
    1
  );
  let secondQuestion = new Question(
    "Where is the capital of Jamaica",
    ["Tashkent", "Amaan", "Kingston", "Nairobi"],
    2
  );