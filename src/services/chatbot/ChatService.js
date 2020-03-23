import ChatBotService from './ChatbotService'

import Reply from '../../models/Reply'
import Util from '../../helpers/Util'

class ChatService {

  async shakeHands(userId) {
    const conversation = await ChatBotService.startConversation(userId)
    let conversationId = conversation.getConversationId()

    console.log("ChatService: Getting conversation id: ", conversationId)

    return conversationId
  }

  async start() {
    const randomRegister = Util.generateRandomRegister()

    const user = await ChatBotService.register(randomRegister.name, randomRegister.email)

    if (user) {
      let userId = user.getUserId()

      console.log("ChatService: Getting user id: ", userId)

      const conversationId = await this.shakeHands(userId)

      return conversationId
    }
    
    return null
  }

  async conversation(conversationId) {
    if (!conversationId) {
      return null
    }

    console.log("ChatService: starting conversation with for id =", conversationId)

    let endConversartion = false
    let finalMessage = ''

    while(!endConversartion) {
      const question = await ChatBotService.talk(conversationId)

      if (question) {
        const text = question.getText()

        const answer = await Reply.doReply(text)
        const answerText = answer.getText()

        if (answer.thankYou()) {
          finalMessage = answerText

          endConversartion = true
          
        } else {
          console.log(`=> Chatbot: ${text}`)
          console.log(`=> ChallengeBot: ${answerText}`)
          
          await ChatBotService.reply(conversationId, answerText)
        }
      }
    }

    console.log(`=> Chatbot: ${finalMessage}`)
  }
}

export default new ChatService()