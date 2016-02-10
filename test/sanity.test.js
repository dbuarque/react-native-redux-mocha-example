import React from "react-native"
import { shallow } from "enzyme"

const {
  Component,
  View,
} = React

class Dummy extends Component {
  render() {
    return <View />
  }
}

describe("sanity", () => {
  it("exposes expect globally", () => {
    expect(true).to.equal(true)
  })

  it("can 'render' React Native components", () => {
    const wrapper = shallow(<Dummy />)

    expect(wrapper.type().displayName).to.equal(View.displayName)
  })
})
