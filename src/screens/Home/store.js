import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withState, withHandlers, compose } from 'recompose'

import appParts from '../../redux/app/appParts'
import todoActions from '../../redux/todo/actions'
import groupTodosByDate from '../../libs/groupTodosByDate'
import { getCalendarDate, getMonthName } from '../../libs/moment'

const { APP_LOADING } = appParts

function mapStateToProps(state) {
  const todos = state
    .get('todo')
    .get('todos')
    .valueSeq()
    .toJS()
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  const isAppLoading = state.getIn(['app', 'isPartLoading', APP_LOADING]) || false

  const groupByDate = groupTodosByDate(todos)

  return {
    todos,
    isAppLoading,
    groupByDate,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setCurrentTodo: todo => todoActions.setCurrentTodo(todo),
    },
    dispatch,
  )

const selectedDate = withState('selectedDate', 'setSelectedDate', 'All')
const todosByDate = withState('todosByDate', 'setTodosByDate', null)

const funcs = withHandlers({
  todosByDay: props => ({ dateString, today }) => {
    const filteredTodos = props.todos
      .filter(todo => getCalendarDate(todo.date) === dateString)
      .sort((a, b) => new Date(b.date) - new Date(a.date))

    props.setSelectedDate(today ? 'Today' : dateString)
    props.setTodosByDate(filteredTodos)
  },
  todosByMonth: props => ({ month, dateString }) => {
    const filteredTodos = props.todos
      .filter((todo) => {
        const date = new Date(todo.date)
        return month === date.getMonth() + 1
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date))

    const monthName = getMonthName(dateString)

    props.setSelectedDate(monthName)
    props.setTodosByDate(filteredTodos)
  },
})

const addicitionalFuncs = withHandlers({
  currentMonthTodos: props => () => {
    const date = new Date()
    const month = date.getMonth() + 1
    const dateString = getCalendarDate(date)

    props.todosByMonth({ month, dateString })
  },
  currentDayTodos: props => () => {
    const date = new Date()
    const dateString = getCalendarDate(date)
    props.todosByDay({ dateString, today: true })
  },
})

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  selectedDate,
  todosByDate,
  funcs,
  addicitionalFuncs,
)

export default enhance
