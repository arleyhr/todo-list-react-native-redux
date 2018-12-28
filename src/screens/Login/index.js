import React from 'react'
import { SafeAreaView, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'

import SocialLoginButton from '../../components/social-login-button'

import routerKeys from '../../router/keys'
import styles from './styles'

import { logo } from '../../libs/images'

import { facebookLogin, googleLogin } from '../../redux/user/service'

const { MAIN_TABS, LOGIN_LIGHTBOX } = routerKeys

function Login() {
  return (
    <SafeAreaView>
      <Image source={logo} style={styles.logo} />
      <SocialLoginButton
        iconName="email"
        text="email"
        primaryColor={styles.emailPrimaryColor}
        activeColor={styles.emailActiveColor}
        onPress={Actions[LOGIN_LIGHTBOX]}
        elevation
      />
      <SocialLoginButton
        iconName="google"
        text="google"
        primaryColor={styles.googlePrimaryColor}
        activeColor={styles.googleActiveColor}
        onPress={googleLogin}
        elevation
      />
      <SocialLoginButton
        iconName="facebook"
        text="facebook"
        primaryColor={styles.facebookPrimaryColor}
        activeColor={styles.facebookActiveColor}
        onPress={facebookLogin}
        elevation
      />
      <SocialLoginButton
        iconName="twitter"
        text="twitter"
        primaryColor={styles.twitterPrimaryColor}
        activeColor={styles.twitterActiveColor}
        onPress={Actions[MAIN_TABS]}
        elevation
      />
    </SafeAreaView>
  )
}

export default Login
