import { reducer as form } from 'redux-form/immutable'
import { combineReducers } from 'redux-immutablejs'

import app from './app/reducer'
import user from './user/reducer'
import todo from './todo/reducer'

const rootReducer = combineReducers({
  app,
  form,
  user,
  todo,
})

export default rootReducer
