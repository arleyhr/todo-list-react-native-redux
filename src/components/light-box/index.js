import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import { getViewportWidth, getViewportHeight } from '../../libs/device'

import FadeInView from '../fade-in-view'

import styles from './styles'

function LightBox({ children, noPadding }) {
  const deviceWidth = getViewportWidth()
  const deviceHeight = getViewportHeight()

  const height = deviceHeight
  const width = deviceWidth

  return (
    <View
      style={[
        styles.container,
        {
          width,
          height,
        },
      ]}
    >
      <FadeInView style={({
        ...styles.box,
        ...(noPadding ? styles.noPadding : {}),
      })}
      >
        {children}
      </FadeInView>
    </View>
  )
}

LightBox.defaultProps = {
  noPadding: false,
}

LightBox.propTypes = {
  children: PropTypes.node.isRequired,
  noPadding: PropTypes.bool,
}

export default LightBox
