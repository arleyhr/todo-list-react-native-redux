import { fromJS } from 'immutable'

const INITIAL_STATE = fromJS({
  isAuthenticated: false,
  currentUser: null,
})

export default INITIAL_STATE
