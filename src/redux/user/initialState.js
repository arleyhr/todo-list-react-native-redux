import { fromJS, Map as map } from 'immutable'

const INITIAL_STATE = fromJS({
  isAuthenticated: false,
  currentUser: map({}),
})

export default INITIAL_STATE
