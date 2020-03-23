import rp from 'request-promise'

import Request from './Request'

const Actions = {
  register: "challenge-register",
  conversation: "challenge-conversation",
  behaviour: "challenge-behaviour"
}

const challengeRegister = async (name, email) => {
  try {
    const data = {
      "name": name,
      "email": email
    }
  
    return await rp(Request.post(Actions.register, data))
  } catch (err) {
    console.error("challengeRegister =", err)
  }

  return null
}

const challangeConversation = async (userId) => {
  try {
    const data = {
      "user_id": userId
    }
  
    return await rp(Request.post(Actions.conversation, data))
  } catch (err) {
    console.error("challangeConversation =", err)
  }

  return null
}

const loadQuestions = async (conversationId) => {
  try {
    return await rp(Request.get(`${Actions.behaviour}/${conversationId}`))
  } catch (err) {
    console.error("loadQuestions =", err)
  }

  return null
}

const sendReply = async (conversationId, content) => {
  try {
    const data = { "content": content }

    return await rp(Request.post(`${Actions.behaviour}/${conversationId}`, data))
  } catch (err) {
    console.error("loadQuestions =", err)
  }

  return null
}



export default { challengeRegister, challangeConversation, loadQuestions, sendReply }