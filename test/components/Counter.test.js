import React from "react-native"
import { shallow } from "enzyme"

import Counter from "../../app/components/Counter"

const {
  Text,
  TouchableOpacity,
  View,
} = React

function setup() {
  const props = {
    counter: 5,
    increment: sinon.spy(),
    decrement: sinon.spy(),
  }
  const wrapper = shallow(<Counter {...props} />)

  return {
    props,
    wrapper,
  }
}

describe("Counter", () => {
  let wrapper

  beforeEach(() => {
    wrapper = setup().wrapper
  })

  it("renders correctly", () => {
    expect(wrapper.type().displayName).to.equal(View.displayName)

    const children = wrapper.children()
    const count = children.at(0)
    const upButton = children.at(1)
    const downButton = children.at(2)

    expect(count.type().displayName).to.equal(Text.displayName)
    expect(upButton.type().displayName).to.equal(TouchableOpacity.displayName)
    expect(downButton.type().displayName).to.equal(TouchableOpacity.displayName)
  })

  it("calls increment when up button is pressed", () => {
    const upButton = wrapper.children().at(1)

    upButton.simulate("press")
    expect(upButton.props().onPress.called).to.be.ok()
  })

  it("calls decrement when down button is pressed", () => {
    const downButton = wrapper.children().at(2)

    downButton.simulate("press")
    expect(downButton.props().onPress.called).to.be.ok()
  })
})
