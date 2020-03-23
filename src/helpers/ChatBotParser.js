import Tags from './Tags'

const match = (matches, question, type, data=null) => {
  if (question.match(type) !== null) {
    let targetData = (data) ? data.replace(/[.?]/g,"").split(", ") : question

    matches.push(handleData(type, targetData))
  }
}

const handleBool = () => (
  {
    "type": "bool",
    "content": true
  }
)

const handleData = (type, data) => (
  {
    "type": type,
    "content": data
  }
)

const parse = (text) => {
  const [ question, targetData ]  = text.split(": ")

  if (question.match(Tags.TalkTags.PROGRESS) !== null) {
    return handleBool()
  }

  let matches = []

  match(matches, question, Tags.TalkTags.THANKS)
  match(matches, question, Tags.MathTags.SUM, targetData)
  match(matches, question, Tags.MathTags.LARGEST, targetData)
  match(matches, question, Tags.StringTags.EVEN, targetData)
  match(matches, question, Tags.StringTags.ALPHABETIZE, targetData)
  match(matches, question, Tags.FileTags.NHL, targetData)
  match(matches, question, Tags.FileTags.BASEBALL, targetData)
  match(matches, question, Tags.FileTags.ESTABLISHED)

  return matches.length === 0 ? null : matches[0]
}

export default { parse }