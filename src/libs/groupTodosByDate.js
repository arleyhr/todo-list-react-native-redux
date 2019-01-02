import { getCalendarDate } from './moment'

export default todos =>
  todos.reduce((list, todo) => {
    const acc = { ...list }
    const todoDate = getCalendarDate(todo.date)
    const obj = { key: todo.id, color: todo.color }

    if (acc[todoDate]) {
      acc[todoDate].dots.push(obj)
    } else {
      acc[todoDate] = { dots: [obj] }
    }

    return acc
  }, {})
