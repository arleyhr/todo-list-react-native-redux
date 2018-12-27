import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  setPartLoading: ['appPart', 'value'],
})

export { Types }
export default Creators
