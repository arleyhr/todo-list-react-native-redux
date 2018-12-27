import { fromJS } from 'immutable'
import { createReducer } from 'reduxsauce'

import { Types } from './actions'
import INITIAL_STATE from './initialState'

const setCurrentUser = (state, { user }) => state.set('currentUser', fromJS(user))

const setAuthState = (state, { value }) =>
  state.set('isAuthenticated', value)

const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_CURRENT_USER]: setCurrentUser,
  [Types.SET_AUTH_STATE]: setAuthState,
})

export default reducer
