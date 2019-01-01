import { fromJS, Map as map } from 'immutable'
import { createReducer } from 'reduxsauce'

import { Types } from './actions'
import INITIAL_STATE from './initialState'

const setTodos = (state, { todos }) =>
  state.set('todos', todos.reduce((list, item) => list.set(item.id, fromJS(item)), map({})))

const addTodo = (state, { item }) => state.setIn(['todos', item.id], map(item))

const updateTodo = (state, { todoId, newData }) => state.setIn(['todos', todoId], map(newData))

const deleteTodo = (state, { todoId }) => state.deleteIn(['todos', todoId])

const setCurrentTodo = (state, { item }) => state.set('currentTodo', map(item))

const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_TODOS]: setTodos,
  [Types.ADD_TODO]: addTodo,
  [Types.UPDATE_TODO]: updateTodo,
  [Types.DELETE_TODO]: deleteTodo,
  [Types.SET_CURRENT_TODO]: setCurrentTodo,
})

export default reducer
