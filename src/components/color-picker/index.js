import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

import withState from './state'
import styles from './styles'

function ColorPicker({
  label, colors, currentColor, showColorBox, colorBoxVisible, selectColor,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TouchableOpacity onPress={showColorBox}>
        <View
          style={[styles.colorButton, { backgroundColor: currentColor || styles.defaultColor }]}
        />
      </TouchableOpacity>
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

ColorPicker.propTypes = {
  label: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  showColorBox: PropTypes.func.isRequired,
  colorBoxVisible: PropTypes.bool.isRequired,
  selectColor: PropTypes.func.isRequired,
}

export default withState(ColorPicker)
