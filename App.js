// @flow
import React from 'react'
import { Provider } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'
import Navigation from './src/router'
import createStore from './src/redux/createStore'

import theme from './src/theme'

EStyleSheet.build(theme)

function App() {
  const store = createStore()

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
