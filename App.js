// @flow
import React from 'react'
import { Provider } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'
import Navigation from './src/router'
import createStore from './src/redux/createStore'
import { onAuthStateChanged } from './src/redux/user/service'
import userActions from './src/redux/user/actions'
import todosActions from './src/redux/todo/actions'

import theme from './src/theme'

EStyleSheet.build(theme)

function App() {
  const store = createStore()

  onAuthStateChanged((user) => {
    if (user) {
      const { _user } = user
      store.dispatch(userActions.setAuthState(true))
      store.dispatch(userActions.setCurrentUser(_user))
      store.dispatch(todosActions.getTodos())
    } else {
      store.dispatch(userActions.setAuthState(false))
      store.dispatch(userActions.setCurrentUser({}))
    }
  })

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
