// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { TouchableWithoutFeedback, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import withState from './state'
import styles from './styles'

function SocialLoginButton({
  customStyles,
  iconName,
  elevation,
  handlePressIn,
  handlePressOut,
  onPress,
  active,
  text,
  primaryColor,
  activeColor,
}) {
  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={() => handlePressOut(onPress)}>
      <View
        style={[
          active ? styles.buttonActive : styles.button,
          customStyles,
          elevation ? styles.elevation : null,
          active ? { backgroundColor: activeColor } : { backgroundColor: primaryColor },
        ]}
      >
        <View style={[styles.iconContainer, { backgroundColor: activeColor }]}>
          <Icon name={iconName} style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

SocialLoginButton.defaultProps = {
  customStyles: {},
  elevation: false,
  active: false,
}

SocialLoginButton.propTypes = {
  customStyles: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  handlePressIn: PropTypes.func.isRequired,
  handlePressOut: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  activeColor: PropTypes.string.isRequired,
  elevation: PropTypes.bool,
  active: PropTypes.bool,
}

export default withState(SocialLoginButton)
