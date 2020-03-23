const baseUri = (action) => (
  `${process.env.CHATBOT_BASE_URL}/${action}`
)

const get = (action) => (
  {
    method: 'GET',
    json: true,
    uri: baseUri(action)
  }
)

const post = (action, data) => (
  {
    method: 'POST',
    json: true,
    uri: baseUri(action),
    body: data
  }
)

export default { get, post }