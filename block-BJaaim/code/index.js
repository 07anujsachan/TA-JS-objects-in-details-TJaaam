class Questions {
  constructor(question , options, correctAnswerIndex) {
    this.Questions = list;
    this.question = question;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isCorrect(answer) {
    return answer === this.options[this.correctAnswerIndex];
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
}
