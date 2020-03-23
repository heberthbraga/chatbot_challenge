import chai from 'chai'

import ChatBotParser from '../../../src/helpers/ChatBotParser'
import Tags from '../../../src/helpers/Tags'

const expect = chai.expect

describe('ChatBotParser', () => {
  describe('#parse', () => {
    it("should return empty if nothing matches", () => {
      const match = ChatBotParser.parse("Lorem Lorem")
      
      expect(match).to.be.null
    })

    it("should return parse response for SUM", () => {
      const match = ChatBotParser.parse("What is the sum of the elements: 5, 2, 12.")
      
      expect(match).to.not.be.null
      expect(match['type']).to.eq(Tags.MathTags.SUM)
      expect(match['content']).to.eql(["5", "2", "12"])
    })

    it("should return parse response for LARGEST", () => {
      const match = ChatBotParser.parse("What is the largest of the elements: 45, -2, 12.")
      
      expect(match).to.not.be.null
      expect(match['type']).to.eq(Tags.MathTags.LARGEST)
      expect(match['content']).to.eql(["45", "-2", "12"])
    })

    it("should return parse response for EVEN", () => {
      const match = ChatBotParser.parse("Please repeat only the words with an even number of letters: ant, potato, quinine, to, five, javascript, closure, week.")
      
      expect(match).to.not.be.null
      expect(match['type']).to.eq(Tags.StringTags.EVEN)
      expect(match['content']).to.eql(["ant", "potato", "quinine", "to", "five", "javascript", "closure", "week"])
    })

    it("should return parse response for ALPHABETIZE", () => {
      const match = ChatBotParser.parse("Please alphabetize the following words: tea, coffee, cola, juice, water, milk.")
      
      expect(match).to.not.be.null
      expect(match['type']).to.eq(Tags.StringTags.ALPHABETIZE)
      expect(match['content']).to.eql(["tea", "coffee", "cola", "juice", "water", "milk"])
    })

    it("should return parse response for NHL", () => {
      const match = ChatBotParser.parse("Which of the following is a NHL team: New York Giants, Boston Bruins, Detroit Tigers?")
      
      expect(match).to.not.be.null
      expect(match['type']).to.eq(Tags.FileTags.NHL)
      expect(match['content']).to.eql(["New York Giants", "Boston Bruins", "Detroit Tigers"])
    })

    it("should return parse response for BASEBALL", () => {
      const match = ChatBotParser.parse("Which of the following is a baseball team: New York Giants, Boston Bruins, Detroit Tigers?")
      
      expect(match).to.not.be.null
      expect(match['type']).to.eq(Tags.FileTags.BASEBALL)
      expect(match['content']).to.eql(["New York Giants", "Boston Bruins", "Detroit Tigers"])
    })

    it("should return parse response for ESTABLISHED", () => {
      const match = ChatBotParser.parse("What sports teams in the data set were established in 1963?")
      
      expect(match).to.not.be.null
      expect(match['type']).to.eq(Tags.FileTags.ESTABLISHED)
      expect(match['content']).to.eql("What sports teams in the data set were established in 1963?")
    })

    it("should return parse response for THANKS", () => {
      const match = ChatBotParser.parse("Thank you.")
      
      expect(match).to.not.be.null
      expect(match['type']).to.eq(Tags.TalkTags.THANKS)
      expect(match['content']).to.eql("Thank you.")
    })

    it("should return parse response for PROGRESS", () => {
      const match = ChatBotParser.parse("Are you ready to begin?")
      
      expect(match).to.not.be.null
      expect(match['type']).to.eq("bool")
      expect(match['content']).to.eql(true)
    })
  })
})