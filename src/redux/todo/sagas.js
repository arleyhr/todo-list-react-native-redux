import { call, takeLatest, put, all, select } from 'redux-saga/effects'
import { Actions } from 'react-native-router-flux'
import { reset } from 'redux-form'
import appActions from '../app/actions'
import todoActions, { Types } from './actions'

import { newTodo, getTodo, getTodos as getAllTodos, updateTodo, deleteTodo } from './service'

import formsKeys from '../forms'
import appParts from '../app/appParts'

const { NEW_TASK } = formsKeys
const { NEW_TASK_LOADING, APP_LOADING, TASK_DETAIL } = appParts

export function* requestAddTodo({ item }) {
  yield put(appActions.setPartLoading(NEW_TASK_LOADING, true))
  try {
    const user = yield select(state =>
      state
        .get('user')
        .get('currentUser')
        .toJS())

    const createResult = yield call(newTodo, { ...item, done: false, userId: user.uid })
    const result = yield call(getTodo, createResult.id)

    yield put(todoActions.addTodo({
      ...result.data(),
      id: createResult.id,
    }))
    yield put(reset(NEW_TASK))
    Actions.pop()
  } catch (e) {
    console.log(e)
  }
  yield put(appActions.setPartLoading(NEW_TASK_LOADING, false))
}

export function* getTodos() {
  yield put(appActions.setPartLoading(APP_LOADING, true))
  try {
    const user = yield select(state =>
      state
        .get('user')
        .get('currentUser')
        .toJS())

    const result = yield call(getAllTodos, user.uid)

    const docs = result.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    }))

    yield put(todoActions.setTodos(docs))
  } catch (e) {
    console.log(e)
  }
  yield put(appActions.setPartLoading(APP_LOADING, false))
}

export function* setDoneStatus({ todoId, status }) {
  yield put(appActions.setPartLoading(TASK_DETAIL, true))
  try {
    yield call(updateTodo, todoId, { done: status })
    const todo = yield select(store => store.getIn(['todo', 'todos', todoId]).toJS())
    yield put(todoActions.updateTodo(todoId, { ...todo, done: status }))
    Actions.pop()
  } catch (e) {
    console.log(e)
  }
  yield put(appActions.setPartLoading(TASK_DETAIL, false))
}

export function* requestDeleteTodo({ todoId }) {
  yield put(appActions.setPartLoading(TASK_DETAIL, true))
  try {
    const result = yield call(deleteTodo, todoId)
    console.log(result)
    Actions.pop()
    yield put(todoActions.deleteTodo(todoId))
  } catch (e) {
    console.log(e)
  }
  yield put(appActions.setPartLoading(TASK_DETAIL, false))
}

export default all([
  takeLatest(Types.REQUEST_ADD_TODO, requestAddTodo),
  takeLatest(Types.REQUEST_DELETE_TODO, requestDeleteTodo),
  takeLatest(Types.GET_TODOS, getTodos),
  takeLatest(Types.SET_DONE_STATUS, setDoneStatus),
])
