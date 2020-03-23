import chai from 'chai'

import MathOperations from '../../../src/helpers/MathOperations'

const expect = chai.expect

describe('MathOperations', () => {
  describe('#sum', () => {
    it("should sum all numbers", () => {
      const nums = ["5", "2", "12"]

      const result = MathOperations.sum(nums)

      expect(result).to.equal(19)
    })
  })

  describe('#largest', () => {
    it("should find the largest number", () => {
      const nums = ["84", "-3", "5", "35"]

      const result = MathOperations.largest(nums)

      expect(result).to.equal(84)
    })
  })
})