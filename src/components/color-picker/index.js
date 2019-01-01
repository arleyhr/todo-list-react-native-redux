import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

import withState from './state'
import styles from './styles'

function ColorPicker(props) {
  const {
    label,
    colors,
    currentColor,
    showColorBox,
    colorBoxVisible,
    selectColor,
    meta: { touched, error },
  } = props

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TouchableOpacity onPress={showColorBox}>
        <View
          style={[styles.colorButton, { backgroundColor: currentColor || styles.defaultColor }]}
        />
      </TouchableOpacity>
      {touched &&
        (error &&
          error.map((err, index) => (
            <Text key={index} style={styles.error}>
              {err}
            </Text>
          )))}
      {colorBoxVisible && (
        <ScrollView style={styles.scrollView}>
          <View style={styles.colorBox}>
            {colors.map(item => (
              <TouchableOpacity key={item.key} onPress={() => selectColor(item.color)}>
                <View
                  style={[
                    styles.color,
                    { backgroundColor: item.color },
                    item.color === currentColor && styles.selectedColor,
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  )
}

ColorPicker.defaultProps = {
  currentColor: styles.defaultColor,
}

ColorPicker.propTypes = {
  label: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string,
  showColorBox: PropTypes.func.isRequired,
  colorBoxVisible: PropTypes.bool.isRequired,
  selectColor: PropTypes.func.isRequired,
  meta: PropTypes.object.isRequired,
}

export default withState(ColorPicker)
