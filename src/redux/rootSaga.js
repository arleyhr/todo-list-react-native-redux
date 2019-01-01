import { all } from 'redux-saga/effects'
import userSagas from './user/sagas'
import todoSagas from './todo/sagas'

function* rootSaga() {
  yield all([userSagas, todoSagas])
}

export default rootSaga
