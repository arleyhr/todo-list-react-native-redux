import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  setAuthState: ['value'],
  requestLogin: ['email', 'password'],
  requestSocialLogin: ['social'],
  logout: null,
  setCurrentUser: ['user'],
})

export { Types }
export default Creators
