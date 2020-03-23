import ChatBotParser from '../helpers/ChatBotParser'
import Answer from './Answer'
import Tags from '../helpers/Tags'
import Util from '../helpers/Util'
import MathOperations from '../helpers/MathOperations'
import StringOperations from '../helpers/StringOperations'
import SportsRepository from '../services/repository/SportsRepository'

class Reply {
  getAnswer(text, thanks=false) {
    return new Answer(text, thanks)
  }

  replyBool() {
    const text = Util.ReplyOptions.YES

    return this.getAnswer(text)
  }

  replySum(numbers) {
    const result = MathOperations.sum(numbers).toString()

    return this.getAnswer(result)
  }

  replyLargest(numbers) {
    const largest = MathOperations.largest(numbers).toString()

    return this.getAnswer(largest)
  }

  replyAlphabetize(words) {
    const result = StringOperations.alphabetize(words)

    return this.getAnswer(result)
  }

  replyEvenWords(words) {
    const result = StringOperations.listEvenWords(words)

    return this.getAnswer(result)
  }

  async replyTeam(team, teams) {
    const result = await SportsRepository.findByTeamAndLeague(team, teams)
    
    let text = result ? result.team : ''
    
    return this.getAnswer(text)
  }

  async replyTeamsByYear(content) {
    const regex = /(\b(19|20)\d{2}\b)/
    
    let regexResult = content.match(regex)

    let year = regexResult !== null ? regexResult[0] : ''

    const sports = await SportsRepository.findAllByYear(year)

    let teams = sports.length > 0 ? sports.map(sport => sport.team).join(",") : ''
    
    return this.getAnswer(teams)
  }

  replyThankYou(content) {
    return this.getAnswer(content, true)
  }

  async doReply(text) {
    const data = ChatBotParser.parse(text)
    const { type, content } = data

    if (type == 'bool') {
      return this.replyBool()
    } else {
      if (type === Tags.MathTags.SUM) {
        return this.replySum(content)
      } else if (type === Tags.MathTags.LARGEST) {
        return this.replyLargest(content)
      } else if (type === Tags.StringTags.ALPHABETIZE) {
        return this.replyAlphabetize(content)
      } else if (type === Tags.StringTags.EVEN) {
        return this.replyEvenWords(content)
      } else if (type === Tags.FileTags.NHL) {
        return await this.replyTeam('NHL', content)
      } else if (type === Tags.FileTags.BASEBALL) {
        return await this.replyTeam('MLB', content)
      } else if (type === Tags.FileTags.ESTABLISHED) {
        return await this.replyTeamsByYear(content)
      } else if (type === Tags.TalkTags.THANKS) {
        return this.replyThankYou(content)
      } else {
        return this.getAnswer("Could not match this tag. Goodbye!", true)
      }
    }
  }
}

export default new Reply()