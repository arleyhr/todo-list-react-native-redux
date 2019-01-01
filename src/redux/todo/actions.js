import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  requestAddTodo: ['item'],
  addTodo: ['item'],
  getTodos: null,
  setTodos: ['todos'],
  setCurrentTodo: ['item'],
  setDoneStatus: ['todoId', 'status'],
  updateTodo: ['todoId', 'newData'],
  requestDeleteTodo: ['todoId'],
  deleteTodo: ['todoId'],
})

export { Types }
export default Creators
