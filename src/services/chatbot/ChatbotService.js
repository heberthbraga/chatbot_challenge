import ChatBotApi from '../../apis/Chatbot'

import User from '../../models/User'
import Conversation from '../../models/Conversation'
import Question from '../../models/Question'
import Assertion from '../../models/Assertion'

class ChatbotService {

  async register(name, email) {
    const result = await ChatBotApi.challengeRegister(name, email)

    let user = result ? new User(result.user_id) : null

    return user
  }

  async startConversation(userId) {
    const result = await ChatBotApi.challangeConversation(userId)

    let conversation = result ? new Conversation(result.conversation_id) : null

    return conversation
  }

  async talk(conversationId) {
    const result = await ChatBotApi.loadQuestions(conversationId)

    let question = result ? new Question(result.messages) : null

    return question
  }

  async reply(conversationId, text) {
    const result = await ChatBotApi.sendReply(conversationId, text)

    let assertion = result ? new Assertion(result.correct) : null

    return assertion
  }
}

export default new ChatbotService()