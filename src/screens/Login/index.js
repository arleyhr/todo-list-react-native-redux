import React from 'react'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import SocialLoginButton from '../../components/social-login-button'

import routerKeys from '../../router/keys'
import styles from './styles'

const { MAIN_TABS } = routerKeys

function Login() {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={Actions[MAIN_TABS]}>
        <Text style={styles.text}>Tabs</Text>
        <SocialLoginButton
          iconName="email"
          text="email"
          primaryColor={styles.emailPrimaryColor}
          activeColor={styles.emailActiveColor}
          onPress={() => {}}
        />
        <SocialLoginButton
          iconName="facebook"
          text="facebook"
          primaryColor={styles.facebookPrimaryColor}
          activeColor={styles.facebookActiveColor}
          onPress={() => {}}
        />
        <SocialLoginButton
          iconName="twitter"
          text="twitter"
          primaryColor={styles.twitterPrimaryColor}
          activeColor={styles.twitterActiveColor}
          onPress={() => {}}
        />
        <SocialLoginButton
          iconName="google"
          text="google"
          primaryColor={styles.googlePrimaryColor}
          activeColor={styles.googleActiveColor}
          onPress={() => {}}
        />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Login
