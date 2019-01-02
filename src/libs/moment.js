import moment from 'moment'

export function getShortDate(date) {
  const currentDate = moment(date)
  return currentDate.format('MMM DD, YYYY')
}

export function getCalendarDate(date) {
  const currentDate = moment(date)
  return currentDate.format('YYYY-MM-DD')
}

export function getFormatedDateTime(date) {
  const currentDate = moment(date)
  return currentDate.format('MMMM D YYYY, h:mm a')
}

export function getShortDateTime(date) {
  const currentDate = moment(date)
  return currentDate.format('MMM DD, h:mm a')
}

export function getMonthName(date) {
  const currentDate = moment(date)
  return currentDate.format('MMMM')
}

export { moment }
