import firebase from 'react-native-firebase'

function onAuthStateChanged(cb) {
  return firebase.auth().onAuthStateChanged(cb)
}

function signWithEmailAndPassword(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

function logout() {
  return firebase.auth().signOut()
}

export { onAuthStateChanged, signWithEmailAndPassword, logout }
