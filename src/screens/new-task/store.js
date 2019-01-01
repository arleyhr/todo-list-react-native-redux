import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { change } from 'redux-form'

import todoActions from '../../redux/todo/actions'

import formKeys from '../../redux/forms'

const { NEW_TASK } = formKeys

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeField: (field, value) => change(NEW_TASK, field, value),
      createTodo: values => todoActions.requestAddTodo(values),
    },
    dispatch,
  )

export default connect(
  null,
  mapDispatchToProps,
)
