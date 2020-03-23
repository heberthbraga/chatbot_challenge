class Assertion {
  constructor(correct) {
    this.correct = correct
  }

  isCorrect() {
    return this.correct != null && this.correct
  }
}

export default Assertion