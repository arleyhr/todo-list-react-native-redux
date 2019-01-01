import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import todoActions from '../../redux/todo/actions'
import appParts from '../../redux/app/appParts'

const { TASK_DETAIL } = appParts

function mapStateToProps(state) {
  const currentTodo = state
    .get('todo')
    .get('currentTodo')
    .toJS()

  const isLoading = state.getIn(['app', 'isPartLoading', TASK_DETAIL]) || false

  return {
    currentTodo,
    isLoading,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setDoneStatus: (todoId, status) => todoActions.setDoneStatus(todoId, status),
      requestDeleteTodo: todoId => todoActions.requestDeleteTodo(todoId),
    },
    dispatch,
  )

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    setDoneStatus: () =>
      dispatchProps.setDoneStatus(stateProps.currentTodo.id, !stateProps.currentTodo.done),
    requestDeleteTodo: () => dispatchProps.requestDeleteTodo(stateProps.currentTodo.id),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)
