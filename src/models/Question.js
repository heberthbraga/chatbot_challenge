import Message from './Message'

class Question {
  constructor(messages) {
    const messagesSize = messages.length
    this.message = new Message(messages[messagesSize - 1].text)
  }

  getText() {
    return this.message.getText()
  }
}

export default Question