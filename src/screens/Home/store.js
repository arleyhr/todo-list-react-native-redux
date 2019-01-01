import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import appParts from '../../redux/app/appParts'
import todoActions from '../../redux/todo/actions'

const { APP_LOADING } = appParts

function mapStateToProps(state) {
  const todos = state
    .get('todo')
    .get('todos')
    .valueSeq()
    .toJS()
    .sort((a, b) => new Date(a.date) - new Date(b.date))

  const isAppLoading = state.getIn(['app', 'isPartLoading', APP_LOADING]) || false

  return {
    todos,
    isAppLoading,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setCurrentTodo: todo => todoActions.setCurrentTodo(todo),
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)
