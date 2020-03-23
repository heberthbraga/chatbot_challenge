class Answer {
  constructor(text, thanks) {
    this.text = text
    this.thanks = thanks
  }

  getText() {
    return this.text
  }

  thankYou() {
    return this.thanks
  }
}

export default Answer