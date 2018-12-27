import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, Text } from 'react-native'

import withState from './state'
import styles from './styles'

function SwitchButton({
  setButtonState,
  currentButtonState,
  leftButtonText,
  rightButtonText,
  onPressLeftButton,
  onPressRightButton,
}) {
  const isFirstButtonActive = currentButtonState === 1
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setButtonState(1, onPressLeftButton)}
        disabled={isFirstButtonActive}
      >
        <View style={[styles.button, isFirstButtonActive ? styles.buttonActive : {}]}>
          <Text style={[isFirstButtonActive ? styles.textActive : {}]}>{leftButtonText}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setButtonState(2, onPressRightButton)}
        disabled={!isFirstButtonActive}
      >
        <View
          style={[
            styles.button,
            !isFirstButtonActive ? styles.buttonActive : {},
            styles.rightButton,
          ]}
        >
          <Text style={[!isFirstButtonActive ? styles.textActive : {}]}>{rightButtonText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

SwitchButton.propTypes = {
  setButtonState: PropTypes.func.isRequired,
  currentButtonState: PropTypes.number.isRequired,
  leftButtonText: PropTypes.string.isRequired,
  rightButtonText: PropTypes.string.isRequired,
  onPressLeftButton: PropTypes.func.isRequired,
  onPressRightButton: PropTypes.func.isRequired,
}

export default withState(SwitchButton)
