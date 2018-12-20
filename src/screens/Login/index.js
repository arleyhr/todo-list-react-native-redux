import React from 'react'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import routerKeys from '../../router/keys'
import styles from './styles'

const { MAIN_TABS } = routerKeys

function Login() {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={Actions[MAIN_TABS]}>
        <Text style={styles.text}>Tabs</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Login
