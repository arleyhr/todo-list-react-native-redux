import { withState, compose, withHandlers } from 'recompose'

const colorBoxVisible = withState('colorBoxVisible', 'setColorBoxVisible', false)
const currentColor = withState('currentColor', 'setCurrentColor', null)

const funcs = withHandlers({
  showColorBox: props => () => {
    props.setColorBoxVisible(true)
  },
  selectColor: props => (color) => {
    props.input.onChange(color)
    props.setCurrentColor(color)
    props.setColorBoxVisible(false)
  },
})

const enhance = compose(
  colorBoxVisible,
  currentColor,
  funcs,
)

export default enhance
