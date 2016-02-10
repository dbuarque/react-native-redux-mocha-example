import React from "react-native"

const {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
} = React

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
    margin: 3,
  },
})

export default class Counter extends Component {
  render() {
    const { counter, increment, decrement } = this.props

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{counter}</Text>
        <TouchableOpacity
          onPress={increment}
          style={styles.button}
        >
          <Text>up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={decrement}
          style={styles.button}
        >
          <Text>down</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
