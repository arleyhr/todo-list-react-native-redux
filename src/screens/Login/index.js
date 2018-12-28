import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'

import SocialLoginButton from '../../components/social-login-button'

import routerKeys from '../../router/keys'
import styles from './styles'

import withStore from './store'

import { logo } from '../../libs/images'

const { LOGIN_LIGHTBOX } = routerKeys

function Login({ socialLoginWith }) {
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
        onPress={() => socialLoginWith('google')}
        elevation
      />
      <SocialLoginButton
        iconName="facebook"
        text="facebook"
        primaryColor={styles.facebookPrimaryColor}
        activeColor={styles.facebookActiveColor}
        onPress={() => socialLoginWith('facebook')}
        elevation
      />
      <SocialLoginButton
        iconName="twitter"
        text="twitter"
        primaryColor={styles.twitterPrimaryColor}
        activeColor={styles.twitterActiveColor}
        onPress={() => {}}
        elevation
      />
    </SafeAreaView>
  )
}

Login.propTypes = {
  socialLoginWith: PropTypes.func.isRequired,
}

export default withStore(Login)
