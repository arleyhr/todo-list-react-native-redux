import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import userActions from '../../redux/user/actions'
import appParts from '../../redux/app/appParts'

const { LOGIN_LOADING } = appParts

function mapStateToProps(state) {
  const isLoading = state.getIn(['app', 'isPartLoading', LOGIN_LOADING]) || false
  return {
    isLoading,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      socialLoginWith: social => userActions.requestSocialLogin(social),
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)
