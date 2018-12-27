import { createStore, applyMiddleware } from 'redux'
import { Map as map } from 'immutable'
import { composeWithDevTools } from 'redux-devtools-extension' // eslint-disable-line
import createSagaMiddleware from 'redux-saga'

import reducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

export default () => {
  const middlewares = [sagaMiddleware]
  const store = createStore(
    reducer,
    map({}),
    composeWithDevTools(applyMiddleware(...middlewares)),
  )

  sagaMiddleware.run(rootSaga)

  return store
}
