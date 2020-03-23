import chai from 'chai'
import sinon from 'sinon'

const expect = chai.expect

import Reply from '../../../src/models/Reply'
import SportsRepository from '../../../src/services/repository/SportsRepository'

const doReply = (text) => (
  Reply.doReply(text)
)

describe('Reply', () =>{
  describe('#getAnswer', () => {
    var text = 'Lorem'

    it('should get an answer without thanks', () => {
      const answer = Reply.getAnswer(text)

      expect(answer).not.to.be.null
      expect(answer.getText()).to.eql(text)
      expect(answer.thankYou()).to.eql(false)
    })

    it('should get an answer with thanks', () => {
      const answer = Reply.getAnswer(text, true)

      expect(answer).not.to.be.null
      expect(answer.getText()).to.eql(text)
      expect(answer.thankYou()).to.eql(true)
    })
  })

  describe('#doReply', () => {
    it('should reply yes', async () => {
      const answer = await doReply('Are you ready to begin?')

      expect(answer).not.to.be.null
      expect(answer.getText()).to.eql('yes')
      expect(answer.thankYou()).to.eql(false)
    })

    it('should reply with the sum result', async () => {
      const answer = await doReply('What is the sum between the following numbers: 5, 2, 12.')

      expect(answer).not.to.be.null
      expect(answer.getText()).to.eql('19')
      expect(answer.thankYou()).to.eql(false)
    })

    it('should reply with the largest result', async () => {
      const answer = await doReply('What is the largest number of the following numbers: 45, -2, 82, 23.')

      expect(answer).not.to.be.null
      expect(answer.getText()).to.eql('82')
      expect(answer.thankYou()).to.eql(false)
    })

    it('should reply with the words in the alphabetical order', async () => {
      const answer = await doReply('Please alphabetize the following words: tea, coffee, cola, juice, water, milk.')

      expect(answer).not.to.be.null
      expect(answer.getText()).to.eql('coffee,cola,juice,milk,tea,water')
      expect(answer.thankYou()).to.eql(false)
    })

    it('should reply with the words with even number of letters', async () => {
      const answer = await doReply('Please repeat only the words with an even number of letters: ant, potato, quinine, to, five, javascript, closure, week.')

      expect(answer).not.to.be.null
      expect(answer.getText()).to.eql('potato,to,five,javascript,week')
      expect(answer.thankYou()).to.eql(false)
    })

    it('should reply with the MLB team', async () => {
      const teams = ['New York Giants', 'Boston Bruins', 'Detroit Tigers']
      const stub = sinon.stub(SportsRepository, 'findByTeamAndLeague').withArgs('MLB', teams).returns(
        {team: 'Detroit Tigers'}
      )

      const answer = await doReply('Which of the following is a baseball team: New York Giants, Boston Bruins, Detroit Tigers?')

      expect(answer).not.to.be.null
      expect(answer.getText()).to.eql('Detroit Tigers')
      expect(answer.thankYou()).to.eql(false)
    })

    it('should reply the teams according to the target year', async () => {
      const teams = ['New York Giants', 'Boston Bruins', 'Detroit Tigers']
      const stub = sinon.stub(SportsRepository, 'findAllByYear').withArgs('1963').returns(
        [{team: 'Detroit Tigers'}, {team: 'Kaiser Chiefs'}]
      )

      const answer = await doReply('What sports teams in the data set were established in 1963?')

      expect(answer).not.to.be.null
      expect(answer.getText()).to.eql('Detroit Tigers,Kaiser Chiefs')
      expect(answer.thankYou()).to.eql(false)
    })

    it('should reply thank you', async () => {
      const text = 'Thank you for taking the Chatbot Challenge.'
      const answer = await doReply(text)

      expect(answer).not.to.be.null
      expect(answer.getText()).to.eql(text)
      expect(answer.thankYou()).to.eql(true)
    })
  })
  
})