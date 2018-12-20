import React from 'react'
import { Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { Actions } from 'react-native-router-flux'

import routerKeys from '../../router/keys'

const { LOGIN_SCREEN } = routerKeys

function Home() {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={Actions[LOGIN_SCREEN]}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home
