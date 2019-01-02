import { call, takeLatest, put, all } from 'redux-saga/effects'
import { Actions } from 'react-native-router-flux'
import { reset } from 'redux-form'
import { Types } from './actions'
import appActions from '../app/actions'
import appParts from '../app/appParts'

import { signWithEmailAndPassword, logout, facebookLogin, googleLogin } from './service'

import routerKeys from '../../router/keys'

import formsKeys from '../forms'

const { LOGIN_LOADING } = appParts

const { LOGIN_FORM } = formsKeys
const { HOME_SCREEN } = routerKeys

export function* requestLogin(action) {
  yield put(appActions.setPartLoading(LOGIN_LOADING, true))
  try {
    const { email, password } = action
    const { user } = yield call(signWithEmailAndPassword, email, password)

    if (user) {
      console.log(user)

      // userActions.setCurrentUser(userData)

      yield put(reset(LOGIN_FORM))

      Actions[HOME_SCREEN].call()
    }
  } catch (e) {
    console.log(e)
  }
  yield put(appActions.setPartLoading(LOGIN_LOADING, false))
}

export function* requestSocialLogin({ social }) {
  yield put(appActions.setPartLoading(LOGIN_LOADING, true))
  try {
    switch (social) {
      case 'facebook':
        yield call(facebookLogin)
        break
      case 'google':
        yield call(googleLogin)
        break
      default:
        return
    }
  } catch (e) {
    console.log(e)
  }
  yield put(appActions.setPartLoading(LOGIN_LOADING, false))
}

export function* signOut() {
  try {
    yield call(logout)
  } catch (e) {
    console.log(e)
  }
}

export default all([
  takeLatest(Types.REQUEST_LOGIN, requestLogin),
  takeLatest(Types.REQUEST_SOCIAL_LOGIN, requestSocialLogin),
  takeLatest(Types.LOGOUT, signOut),
])
