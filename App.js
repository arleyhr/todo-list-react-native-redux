// @flow
import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import Navigation from './src/router'

import theme from './src/theme'

EStyleSheet.build(theme)

function App() {
  return (
    <Navigation />
  )
}

export default App
