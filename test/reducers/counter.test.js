import counter from "../../app/reducers/counter"
import * as types from "../../app/actions/actionTypes"

describe("counter reducer", () => {
  context("with no specified action", () => {
    it("returns the initial state", () => {
      expect(counter()).to.eql({ count: 0 })
    })
  })

  context("with the INCREMENT action", () => {
    it("increments the count", () => {
      expect(
        counter(undefined, { type: types.INCREMENT })
      ).to.eql({
        count: 1,
      })
    })
  })

  context("with the DECREMENT action", () => {
    it("decrements the count", () => {
      expect(
        counter(undefined, { type: types.DECREMENT })
      ).to.eql({
        count: -1,
      })
    })
  })
})
