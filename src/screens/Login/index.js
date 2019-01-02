import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, Image, View } from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts'

import SocialLoginButton from '../../components/social-login-button'

import styles from './styles'

import withStore from './store'

import { logo } from '../../libs/images'

function Login({ socialLoginWith, isLoading }) {
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.content}>
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
            iconName="email"
            text="email"
            primaryColor={styles.emailPrimaryColor}
            activeColor={styles.emailActiveColor}
            onPress={() => {
              /* Actions[LOGIN_LIGHTBOX] */
            }}
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
        </View>
      </View>
      <AwesomeAlert
        show={isLoading}
        showProgress
        title="Loading"
        closeOnTouchOutside
        closeOnHardwareBackPress={false}
        alertContainerStyle={styles.loadingElevator}
      />
    </SafeAreaView>
  )
}

Login.propTypes = {
  socialLoginWith: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default withStore(Login)
