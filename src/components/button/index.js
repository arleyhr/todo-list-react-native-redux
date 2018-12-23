import React from 'react'
import PropTypes from 'prop-types'
import { TouchableWithoutFeedback, View, Text } from 'react-native'

import withState from './state'
import styles from './styles'

function Button({
  customStyles,
  elevation,
  handlePressIn,
  handlePressOut,
  onPress,
  active,
  text,
  primaryColor = styles.defaultPrimaryColor,
  activeColor = styles.defaultActiveColor,
}) {
  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={() => handlePressOut(onPress)}>
      <View
        style={[
          active ? styles.buttonActive : styles.button,
          customStyles,
          elevation && !active ? styles.elevation : null,
          active ? { backgroundColor: activeColor } : { backgroundColor: primaryColor },
        ]}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

Button.defaultProps = {
  customStyles: {},
  elevation: false,
  active: false,
  primaryColor: styles.defaultPrimaryColor,
  activeColor: styles.defaultActiveColor,
}

Button.propTypes = {
  customStyles: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  handlePressIn: PropTypes.func.isRequired,
  handlePressOut: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  activeColor: PropTypes.string,
  elevation: PropTypes.bool,
  active: PropTypes.bool,
}

export default withState(Button)
