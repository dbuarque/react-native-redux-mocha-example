import * as counterActions from "../../app/actions/counterActions"
import * as types from "../../app/actions/actionTypes"

describe("counterActions", () => {
  it("should create an action to increment the state", () => {
    const expectedAction = {
      type: types.INCREMENT,
    }

    expect(counterActions.increment()).to.eql(expectedAction)
  })

  it("should create an action to decrement the state", () => {
    const expectedAction = {
      type: types.DECREMENT,
    }

    expect(counterActions.decrement()).to.eql(expectedAction)
  })
})
