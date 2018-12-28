// @flow
import React from 'react'
import { Provider } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'
import Navigation from './src/router'
import createStore from './src/redux/createStore'
import { onAuthStateChanged } from './src/redux/user/service'

import theme from './src/theme'

EStyleSheet.build(theme)

function App() {
  const store = createStore()

  onAuthStateChanged((user) => {
    console.log(user)
    // store.dispatch(userActions.onAuthStateChanged(user ? user._user : null))
    // if (user) {
    //   store.dispatch(appActions.getDefaultData())
    //   store.dispatch(serviceActions.startListenServices())
    //   store.dispatch(userActions.getEmployeeData())
    // } else store.dispatch(serviceActions.stopListenServices())
  })

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
