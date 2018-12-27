import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  setAuthState: ['value'],
  requestLogin: ['email', 'password'],
  logout: null,
  setCurrentUser: ['user'],
})

export { Types }
export default Creators
