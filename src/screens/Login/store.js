import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import userActions from '../../redux/user/actions'

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      socialLoginWith: social => userActions.requestSocialLogin(social),
    },
    dispatch,
  )

export default connect(
  null,
  mapDispatchToProps,
)
