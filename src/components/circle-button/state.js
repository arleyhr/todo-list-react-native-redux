import { withState, withHandlers, compose } from 'recompose'

const isActive = withState('active', 'setActive', false)

const funcs = withHandlers({
  handlePressIn: props => () => {
    props.setActive(true)
  },
  handlePressOut: props => (onPress) => {
    props.setActive(false)
    onPress()
  },
})

const enhance = compose(
  isActive,
  funcs,
)

export default enhance
