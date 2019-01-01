import { withState, withHandlers, compose } from 'recompose'

import { getFormatedDateTime } from '../../libs/moment'

export default compose(
  withState('isDatePickerVisible', 'setPickerVisible', false),
  withHandlers({
    confirmDate: props => (value) => {
      props.changeField('date', value)
      props.changeField('formatDate', getFormatedDateTime(value))
      props.setPickerVisible(false)
    },
  }),
)
