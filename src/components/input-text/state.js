import { withState, compose, withHandlers } from 'recompose'

const isFocused = withState('isFocused', 'setFocus', false)

const funcs = withHandlers({
  handleFocus: props => () => {
    props.setFocus(true)
  },
  handleBlur: props => () => {
    props.setFocus(false)
  },
})

const enhance = compose(
  isFocused,
  funcs,
)

export default enhance
