// @flow
import React from 'react'
import { Text, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import theme from './src/theme'

EStyleSheet.build(theme)

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$colors.mainBlue',
  },
  welcome: {
    color: '$colors.white',
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
