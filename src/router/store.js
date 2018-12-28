import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    isAuthenticated: state.get('user').get('isAuthenticated'),
  }
}

export default connect(mapStateToProps)
