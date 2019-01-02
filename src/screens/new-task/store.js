import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { change } from 'redux-form'

import todoActions from '../../redux/todo/actions'
import appParts from '../../redux/app/appParts'
import formKeys from '../../redux/forms'

const { NEW_TASK_LOADING } = appParts

const { NEW_TASK } = formKeys

function mapStateToProps(state) {
  const isLoading = state.getIn(['app', 'isPartLoading', NEW_TASK_LOADING]) || false
  return {
    isLoading,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeField: (field, value) => change(NEW_TASK, field, value),
      createTodo: values => todoActions.requestAddTodo(values),
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)
