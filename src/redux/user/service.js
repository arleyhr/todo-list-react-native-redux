import firebase from 'react-native-firebase'
import { AccessToken, LoginManager } from 'react-native-fbsdk'
import { GoogleSignin } from 'react-native-google-signin'

function onAuthStateChanged(cb) {
  return firebase.auth().onAuthStateChanged(cb)
}

function signWithEmailAndPassword(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

async function logout() {
  await firebase.auth().signOut()
}

async function facebookLogin() {
  try {
    const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email'])

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

async function googleLogin() {
  try {
    await GoogleSignin.configure()

    const data = await GoogleSignin.signIn()

    // create a new firebase credential with the token
    const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
    // login with credential
    const currentUser = await firebase.auth().signInWithCredential(credential)

    console.info(JSON.stringify(currentUser.user.toJSON()))
  } catch (error) {
    throw error
  }
}

export { onAuthStateChanged, signWithEmailAndPassword, logout, facebookLogin, googleLogin }
