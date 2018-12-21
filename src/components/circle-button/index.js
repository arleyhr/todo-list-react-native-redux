// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { TouchableWithoutFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import withState from './state'
import styles from './styles'

function CircleButton({
  customStyles,
  iconName,
  elevation,
  handlePressIn,
  handlePressOut,
  onPress,
  active,
}) {
  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={() => handlePressOut(onPress)}>
      <View
        style={[
          active ? styles.buttonActive : styles.button,
          customStyles,
          elevation ? styles.elevation : null,
        ]}
      >
        <Icon name={iconName} style={styles.icon} />
      </View>
    </TouchableWithoutFeedback>
  )
}

CircleButton.defaultProps = {
  customStyles: {},
  elevation: false,
  active: false,
}

CircleButton.propTypes = {
  customStyles: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  handlePressIn: PropTypes.func.isRequired,
  handlePressOut: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
  elevation: PropTypes.bool,
  active: PropTypes.bool,
}

export default withState(CircleButton)
