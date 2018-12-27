import React from 'react'
import { View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'

import InputText from '../input-text'
import Button from '../button'

import styles from './styles'

function EmailLogin() {
  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.container}>
        <View style={styles.headContainer}>
          <Text style={styles.headText}>Login with email</Text>
          <View style={styles.headLine} />
        </View>
        <View>
          <View style={styles.inputContainer}>
            <InputText label="Email" placeholder="Your email" />
          </View>
          <View style={styles.inputContainer}>
            <InputText label="Password" placeholder="Your password" />
          </View>
        </View>
      </View>
      <View>
        <Button text="Login" onPress={() => {}} />
      </View>
      <View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default EmailLogin
