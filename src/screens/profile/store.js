import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    user: state
      .get('user')
      .get('currentUser')
      .toJS(),
  }
}

export default connect(mapStateToProps)
