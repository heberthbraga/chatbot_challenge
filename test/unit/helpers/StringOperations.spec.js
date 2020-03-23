import chai from 'chai'

import StringOperations from '../../../src/helpers/StringOperations'

const expect = chai.expect

describe('StringOperations', () => {
  describe('#alphabetize', () => {
    it('should sort "tea", "coffee", "cola", "juice", "water", "milk" in alphabetycal order', () => {
      const words = ["tea", "coffee", "cola", "juice", "water", "milk"]

      const result = StringOperations.alphabetize(words)

      expect(result).to.equal("coffee,cola,juice,milk,tea,water")
    })

    it('should sort Object, switch, class, Array, for, Date, function in alphabetycal order', () => {
      const words = ["Object", "switch", "class", "Array", "for", "Date", "function"]

      const result = StringOperations.alphabetize(words)

      expect(result).to.equal("Array,class,Date,for,function,Object,switch")
    })
  })

  describe('#listEvenWords', () => {
    it("should list the words with even number of letters", () => {
      const words = ["ant", "potato", "quinine", "to", "five", "javascript", "closure", "week"]

      const result = StringOperations.listEvenWords(words)

      expect(result).to.equal("potato,to,five,javascript,week")
    })
  })
})