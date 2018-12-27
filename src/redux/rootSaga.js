import { all } from 'redux-saga/effects'
import userSagas from './user/sagas'

function* rootSaga() {
  yield all([userSagas])
}

export default rootSaga
