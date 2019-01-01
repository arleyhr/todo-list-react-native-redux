import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Picker } from 'react-native'

import styles from './styles'

function InputPicker(props) {
  const {
    label,
    placeholder,
    options,
    input: { onChange, value, ...restProps },
    meta: { touched, error },
  } = props

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>{label}</Text>
      <Picker
        selectedValue={value}
        onValueChange={val => onChange(val)}
        style={styles.input}
        placeholder={placeholder}
        mode="dialog"
        {...restProps}
      >
        {options.map(item => (
          <Picker.Item key={item.key} label={item.label} value={item.value} />
        ))}
      </Picker>
      {touched &&
        (error &&
          error.map((err, index) => (
            <Text key={index} style={styles.error}>
              {err}
            </Text>
          )))}
    </View>
  )
}

InputPicker.defaultProps = {
  options: [],
}

InputPicker.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })),
}

export default InputPicker
