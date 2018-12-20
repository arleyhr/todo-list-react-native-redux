// @flow
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    textShadowColor: 'lightskyblue',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },
})

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hello World!</Text>
    </View>
  )
}

export default App
