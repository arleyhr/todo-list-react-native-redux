import firebase from 'react-native-firebase'

const firestore = firebase.firestore()

const todosRef = firestore.collection('todos')

function newTodo(todo) {
  return todosRef.add(todo)
}

function getTodos(userId) {
  return todosRef
    .where('userId', '==', userId)
    .get()
}

function getTodo(todoId) {
  return todosRef.doc(todoId).get()
}

function updateTodo(todoId, data) {
  return todosRef.doc(todoId).update(data)
}

function deleteTodo(todoId) {
  return todosRef.doc(todoId).delete()
}

export { newTodo, getTodos, updateTodo, getTodo, deleteTodo }
