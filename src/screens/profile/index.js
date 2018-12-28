import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'

import Button from '../../components/button'

import { logout } from '../../redux/user/service'

import styles from './styles'

function Profile() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollContainer}>
        <Button text="Logout" onPress={logout} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile
