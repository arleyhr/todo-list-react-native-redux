import { reducer as form } from 'redux-form/immutable'
import { combineReducers } from 'redux-immutablejs'

import app from './app/reducer'
import user from './user/reducer'

const rootReducer = combineReducers({
  app,
  form,
  user,
})

export default rootReducer
