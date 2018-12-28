import firebase from 'react-native-firebase'
import { AccessToken, LoginManager } from 'react-native-fbsdk'


function onAuthStateChanged(cb) {
  return firebase.auth().onAuthStateChanged(cb)
}

function signWithEmailAndPassword(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

function logout() {
  return firebase.auth().signOut()
}

async function facebookLogin() {
  try {
    const result = await LoginManager.logInWithReadPermissions([
      'public_profile',
      'email',
    ])

    if (result.isCancelled) {
      throw new Error('User cancelled request')
    }

    const data = await AccessToken.getCurrentAccessToken()
    if (!data) {
      throw new Error('Something went wrong obtaining the users access token')
    }

    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)
    return await firebase.auth().signInWithCredential(credential)
  } catch (error) {
    throw error
  }
}

export { onAuthStateChanged, signWithEmailAndPassword, logout, facebookLogin }
