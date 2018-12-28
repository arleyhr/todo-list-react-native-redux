import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, ScrollView, View, Image, Text } from 'react-native'

import Button from '../../components/button'

import { logout } from '../../redux/user/service'

import styles from './styles'

import withStore from './store'

function Profile({ user }) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.userInfo}>
          <View style={styles.photoContainer}>
            <Image source={{ uri: user.photoURL }} style={styles.photo} />
          </View>
          <Text style={styles.userName}>{user.displayName}</Text>
        </View>
        <View style={styles.logoutContainer}>
          <Button text="Logout" onPress={logout} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
}

export default withStore(Profile)
