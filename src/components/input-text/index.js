import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput } from 'react-native'

import withState from './state'
import styles from './styles'

function InputText(props) {
  const {
    label,
    placeholder,
    isFocused,
    handleFocus,
    handleBlur,
    disabled,
    input: { onChange, ...restInput },
    meta: { touched, error },
  } = props

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocus]}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        disabled={disabled}
        {...restInput}
      />
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

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
}

export default withState(InputText)
