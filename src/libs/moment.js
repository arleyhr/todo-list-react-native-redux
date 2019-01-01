import moment from 'moment'

export function getShortDate(date) {
  const currentDate = moment(date)
  return currentDate.format('MMM DD, YYYY')
}

export function getFormatedDateTime(date) {
  const currentDate = moment(date)
  return currentDate.format('MMMM D YYYY, h:mm a')
}

export function getShortDateTime(date) {
  const currentDate = moment(date)
  return currentDate.format('MMM DD, h:mm a')
}

export { moment }
