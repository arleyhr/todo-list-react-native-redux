import { withState, withHandlers, compose } from 'recompose'

const isActive = withState('currentButtonState', 'setCurrentButtonState', 1)

const funcs = withHandlers({
  setButtonState: ({ setCurrentButtonState }) => (state, func) => {
    setCurrentButtonState(state)
    func()
  },
})

const enhance = compose(
  isActive,
  funcs,
)

export default enhance
