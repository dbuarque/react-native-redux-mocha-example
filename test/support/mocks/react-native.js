import React from "react"

const RN = React

export const PropTypes = React.PropTypes

RN.StyleSheet = {
  create: (style) => style,
}

const createComponent = (type) => {
  return React.createClass({ //eslint-disable-line react/prefer-es6-class
    displayName: type,
    propTypes: {
      children: React.PropTypes.node,
    },
    type,
    render() {
      return <div {...this.props}>{this.props.children}</div>
    },
  })
}

RN.View = createComponent("View")
RN.Text = createComponent("Text")
RN.ActivityIndicatorIOS = createComponent("ActivityIndicatorIOS")
RN.Image = createComponent("Image")
RN.TouchableHighlight = createComponent("TouchableHighlight")
RN.TouchableOpacity = createComponent("TouchableOpacity")
RN.ScrollView = createComponent("ScrollView")

export default RN
