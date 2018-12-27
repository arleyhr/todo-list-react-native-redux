import { createReducer } from 'reduxsauce'

import { Types } from './actions'
import INITIAL_STATE from './initialState'

const setPartLoading = (state, { appPart, value }) =>
  state.setIn(['isPartLoading', appPart], value)

const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PART_LOADING]: setPartLoading,
})

export default reducer
