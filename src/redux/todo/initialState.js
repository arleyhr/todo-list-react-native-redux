import { fromJS, Map as map } from 'immutable'

const INITIAL_STATE = fromJS({
  todos: map({}),
  currentTodo: map({}),
})

export default INITIAL_STATE
