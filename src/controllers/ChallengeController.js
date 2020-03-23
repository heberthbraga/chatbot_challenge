import ChatService from '../services/chatbot/ChatService'

const start = async (req, res) => {
    console.log("ChallengeController: Starting challenge...")
    
    try {
        const conversationId = await ChatService.start()

        if (conversationId) {
            await ChatService.conversation(conversationId)
        }
    
        res.send({ success: true })
    } catch (err) {
        console.log("ChatService:start() error =", err.message)
        res.send({ error: err.message })
    }
}

export default { start }